package com.foshanplus.mediaperformance.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foshanplus.mediaperformance.entity.master.Article;
import com.foshanplus.mediaperformance.entity.master.ArticleScore;
import com.foshanplus.mediaperformance.entity.master.ArticleScoreRecord;
import com.foshanplus.mediaperformance.entity.master.ArticleScoreRecordAuthor;
import com.foshanplus.mediaperformance.enums.ExportType;
import com.foshanplus.mediaperformance.enums.NewsType;
import com.foshanplus.mediaperformance.mapper.master.ArticleMapper;
import com.foshanplus.mediaperformance.mapper.master.ArticleScoreMapper;
import com.foshanplus.mediaperformance.mapper.master.ArticleScoreRecordAuthorMapper;
import com.foshanplus.mediaperformance.mapper.master.ArticleScoreRecordMapper;
import com.foshanplus.mediaperformance.model.excel.ArticleExcelModel;
import com.github.pagehelper.Page;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 15:33
 */

@Service
public class ArticleService {

	@Autowired
	private ArticleMapper articleMapper;
	
	@Autowired
	private ArticleScoreMapper articleScoreMapper;
	
	@Autowired
	private ArticleScoreRecordMapper articleScoreRecordMapper;
	
	@Autowired
	private ArticleScoreRecordAuthorMapper articleScoreRecordAuthorMapper;

	@Transactional
	public Integer save(Article article) throws Exception {
		Integer count;
		article.setUpdateUser("SYSTEM");
		if (article.getId() != null) {
			count = articleMapper.update(article);
		} else {
			article.setCreateUser("SYSTEM");
			count = articleMapper.add(article);
		}
		saveArticleScoreRecord(article);
		return count;
	}
	
	public List<ArticleExcelModel> exportToExcel(ExportType exportType, NewsType newsType, String paperStartTime, String paperEndTime, String appStartTime,
			String appEndTime, String paperTitle, String appTitle, String author, String editor, Integer isScore,
			Integer scoreId) {
		return articleMapper.exportToExcel(exportType, newsType, paperStartTime, paperEndTime, appStartTime, appEndTime, paperTitle,
				appTitle, author, editor, isScore, scoreId);
	}
	
	@Transactional
	public Integer delete(Long id) throws Exception {
		if (articleMapper.countByParentId(id) > 0) {
			throw new Exception("该记录存在稿件素材数据，请先删除稿件素材数据再删除该数据");
		} else if (articleScoreRecordMapper.countByArticleId(id) > 0) {
			throw new Exception("已打分的数据不能删除");
		}
		return articleMapper.delete(id);
	}
	
	public Page<Article> findAll(ExportType exportType, NewsType newsType, String paperStartTime, String paperEndTime, String appStartTime,
			String appEndTime, String paperTitle, String appTitle, String author, String editor, Integer isScore,
			Integer scoreId, Integer pageNum, Integer pageSize, String orderBy) {
		return articleMapper.findAll(exportType, newsType, paperStartTime, paperEndTime, appStartTime, appEndTime, 
				paperTitle, appTitle, author, editor, isScore, scoreId, pageNum, pageSize, orderBy);
	}

	public Article findById(Long id) {
		return articleMapper.findById(id);
	}
	
	public List<ArticleScore> findArticleScoreAll() {
		return articleScoreMapper.findAll();
	}
	
	private void saveArticleScoreRecord(Article article) throws Exception {
		ArticleScoreRecord articleScoreRecord = article.getArticleScoreRecord();
		articleScoreRecord.setArticleId(article.getId());
		articleScoreRecord.setNewsSourceId(article.getNewsSourceId());
		articleScoreRecord.setNewsTransferId(article.getNewsTransferId());
		articleScoreRecord.setUpdateUser("SYSTEM");
		if (articleScoreRecordMapper.countByArticleId(article.getId()) == 0) {
			if ((articleScoreRecord.getScoreId() != null && articleScoreRecord.getScoreId() != "")
					|| (articleScoreRecord.getRemark() != null && articleScoreRecord.getRemark() != "")) {
				articleScoreRecord.setCreateUser("SYSTEM");
				articleScoreRecordMapper.add(articleScoreRecord);
			}
		} else {
			articleScoreRecordMapper.update(articleScoreRecord);
		}
		if (articleScoreRecord.getScoreId() != null && articleScoreRecord.getScoreId() != "" && article.getArticleScoreRecordAuthors() != null) {
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
