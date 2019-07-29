package com.foshanplus.mediaperformance.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foshanplus.mediaperformance.bean.Article;
import com.foshanplus.mediaperformance.bean.ArticleScore;
import com.foshanplus.mediaperformance.bean.ArticleScoreRecord;
import com.foshanplus.mediaperformance.bean.ArticleScoreRecordAuthor;
import com.foshanplus.mediaperformance.bean.excel.ArticleModel;
import com.foshanplus.mediaperformance.enums.NewsType;
import com.foshanplus.mediaperformance.mapper.ArticleMapper;
import com.foshanplus.mediaperformance.mapper.ArticleScoreMapper;
import com.foshanplus.mediaperformance.mapper.ArticleScoreRecordAuthorMapper;
import com.foshanplus.mediaperformance.mapper.ArticleScoreRecordMapper;
import com.foshanplus.mediaperformance.result.Result;
import com.github.pagehelper.Page;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 15:33
 */

@Service
@Transactional
public class ArticleService {

	@Autowired
	private ArticleMapper articleMapper;
	
	@Autowired
	private ArticleScoreMapper articleScoreMapper;
	
	@Autowired
	private ArticleScoreRecordMapper articleScoreRecordMapper;
	
	@Autowired
	private ArticleScoreRecordAuthorMapper articleScoreRecordAuthorMapper;

	public Result<Article> save(Article article) {
		try {
			if (article.getId() != null) {
				articleMapper.update(article);
				saveArticleScoreRecord(article);
				return new Result<Article>("修改成功", true);
			} else {
				articleMapper.add(article);
				saveArticleScoreRecord(article);
				return new Result<Article>("新增成功", true);
			}
		} catch (Exception e) {
			return new Result<Article>("保存失败 : " + e.toString(), false);
		}
	}
	
	public List<ArticleModel> exportToExcel(Integer type, NewsType newsType, String paperStartTime, String paperEndTime, String appStartTime,
			String appEndTime, String paperTitle, String appTitle, String author, String editor, Integer isScore,
			Integer scoreId) {
		return articleMapper.exportToExcel(type, newsType, paperStartTime, paperEndTime, appStartTime, appEndTime, paperTitle,
				appTitle, author, editor, isScore, scoreId);
	}
	
	public Result<Article> delete(Long id) {
		if (articleScoreRecordMapper.countByArticleId(id) > 0) {
			return new Result<Article>("删除失败 : 已打分的数据不能删除", false);
		}
		try {
			articleMapper.delete(id);
			return new Result<Article>("删除成功", true);
		} catch (Exception e) {
			return new Result<Article>("删除失败 : " + e.toString(), false);
		}
	}
	
	public Result<List<Article>> findAll(Integer type, NewsType newsType, String paperStartTime, String paperEndTime, String appStartTime,
			String appEndTime, String paperTitle, String appTitle, String author, String editor, Integer isScore,
			Integer scoreId, Integer pageNum, Integer pageSize, String orderBy) {
		Page<Article> articles = articleMapper.findAll(type, newsType, paperStartTime, paperEndTime, appStartTime, appEndTime, 
				paperTitle, appTitle, author, editor, isScore, scoreId, pageNum, pageSize, orderBy);
		return new Result<List<Article>>(articles, articles.getPageNum(), articles.getPageSize(), articles.getTotal(), articles.getPages());
	}

	public Result<Article> findById(Long id) {
		return new Result<Article>(articleMapper.findById(id), null, null, null, null);
	}
	
	public Result<List<ArticleScore>> findArticleScoreAll() {
		return new Result<List<ArticleScore>>(articleScoreMapper.findAll());
	}
	
	private void saveArticleScoreRecord(Article article) throws Exception {
		ArticleScoreRecord articleScoreRecord = article.getArticleScoreRecord();
		articleScoreRecord.setArticleId(article.getId());
		articleScoreRecord.setNewsSourceId(article.getNewsSourceId());
		articleScoreRecord.setNewsTransferId(article.getNewsTransferId());
		articleScoreRecord.setUpdateUser("SYSTEM");
		if (articleScoreRecordMapper.countByNewsTransferId(article.getId(), article.getNewsTransferId()) == 0) {
			if ((articleScoreRecord.getScoreId() != null && articleScoreRecord.getScoreId() != "")
					|| (articleScoreRecord.getRemark() != null && articleScoreRecord.getRemark() != "")) {
				articleScoreRecord.setCreateUser("SYSTEM");
				articleScoreRecordMapper.add(articleScoreRecord);
			}
		} else {
			articleScoreRecordMapper.update(articleScoreRecord);
		}
		if (articleScoreRecord.getScoreId() != null && articleScoreRecord.getScoreId() != "") {
			saveArticleScoreRecordAuthor(articleScoreRecord, article.getArticleScoreRecordAuthors());
		}
	}
	
	private void saveArticleScoreRecordAuthor(ArticleScoreRecord articleScoreRecord, List<ArticleScoreRecordAuthor> articleScoreRecordAuthors) throws Exception {
		if (articleScoreRecord.getId() == null) {
			throw new Exception("文章打分不成功");
		}
		List<Long> oldIds = articleScoreRecordAuthorMapper.findIdsByScoreRecordId(articleScoreRecord.getId());
		List<Long> newIds = new ArrayList<Long>();
		// 新增或更新t_article_score_record_author表
		articleScoreRecordAuthors.stream().forEach(articleScoreRecordAuthor -> {
			newIds.add(articleScoreRecordAuthor.getId());
			articleScoreRecordAuthor.setScoreRecordId(articleScoreRecord.getId());
			articleScoreRecordAuthor.setUpdateUser("SYSTEM");
			if (articleScoreRecordAuthor.getId() == null) {
				articleScoreRecordAuthor.setCreateUser("SYSTEM");
				articleScoreRecordAuthorMapper.add(articleScoreRecordAuthor);
			} else {
				articleScoreRecordAuthorMapper.update(articleScoreRecordAuthor);
			}
		});
		// 前端没有提交的id与数据库对比，没有则删除
		oldIds.removeAll(newIds);
		if (!oldIds.isEmpty()) {
			articleScoreRecordAuthorMapper.deleteByIds(oldIds);
		}
	}
}
