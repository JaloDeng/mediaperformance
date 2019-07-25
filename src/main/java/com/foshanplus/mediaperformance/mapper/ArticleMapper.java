package com.foshanplus.mediaperformance.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.foshanplus.mediaperformance.bean.Article;
import com.foshanplus.mediaperformance.excel.model.ArticleModel;
import com.github.pagehelper.Page;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 14:06
 */

public interface ArticleMapper {

	public Integer add(Article article);
	
	public List<ArticleModel> exportToExcel(@Param("type") Integer type,
			@Param("paperStartTime") String paperStartTime, @Param("paperEndTime") String paperEndTime,
			@Param("appStartTime") String appStartTime, @Param("appEndTime") String appEndTime,
			@Param("paperTitle") String paperTitle, @Param("appTitle") String appTitle,
			@Param("author") String author, @Param("editor") String editor, 
			@Param("isScore") Integer isScore, @Param("scoreId") Integer scoreId);
	
	public void delete(Long id);

	public Page<Article> findAll(@Param("type") Integer type,
			@Param("paperStartTime") String paperStartTime, @Param("paperEndTime") String paperEndTime,
			@Param("appStartTime") String appStartTime, @Param("appEndTime") String appEndTime,
			@Param("paperTitle") String paperTitle, @Param("appTitle") String appTitle,
			@Param("author") String author, @Param("editor") String editor, 
			@Param("isScore") Integer isScore, @Param("scoreId") Integer scoreId,
			@Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize, @Param("orderBy") String orderBy);
	
	public Article findById(Long id);

	public void update(Article article);
	
}
