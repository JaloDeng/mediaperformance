package com.foshanplus.mediaperformance.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foshanplus.mediaperformance.bean.Article;
import com.foshanplus.mediaperformance.mapper.ArticleMapper;
import com.foshanplus.mediaperformance.result.Result;
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

	public Result<Article> save(Article article) {
		try {
			if (article.getId() != null) {
				articleMapper.update(article);
				return new Result<Article>("修改成功", true);
			} else {
				articleMapper.add(article);
				return new Result<Article>("新增成功", true);
			}
		} catch (Exception e) {
			return new Result<Article>("保存失败 : " + e.toString(), false);
		}
	}
	
	public Result<Article> delete(Long id) {
		try {
			articleMapper.delete(id);
			return new Result<Article>("删除成功", true);
		} catch (Exception e) {
			return new Result<Article>("删除失败 : " + e.toString(), false);
		}
	}
	
	public Result<List<Article>> find(Map<String, Object> params) {
		Page<Article> articles = articleMapper.find(params);
		return new Result<List<Article>>(articles, articles.getPageNum(), articles.getPageSize(), articles.getTotal(), articles.getPages());
	}

	public Result<Article> findById(Long id) {
		return new Result<Article>(articleMapper.findById(id), null, null, null, null);
	}

}
