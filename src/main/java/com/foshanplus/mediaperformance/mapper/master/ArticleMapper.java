package com.foshanplus.mediaperformance.mapper.master;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.foshanplus.mediaperformance.entity.Article;
import com.foshanplus.mediaperformance.enums.ExportType;
import com.foshanplus.mediaperformance.enums.NewsType;
import com.foshanplus.mediaperformance.model.excel.ArticleExcelModel;
import com.github.pagehelper.Page;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 14:06
 */

public interface ArticleMapper {

	public Integer add(Article article);
	
	public List<ArticleExcelModel> exportToExcel(@Param("exportType") ExportType exportType, @Param("newsType") NewsType newsType,
			@Param("paperStartTime") String paperStartTime, @Param("paperEndTime") String paperEndTime,
			@Param("appStartTime") String appStartTime, @Param("appEndTime") String appEndTime,
			@Param("paperTitle") String paperTitle, @Param("appTitle") String appTitle,
			@Param("author") String author, @Param("editor") String editor, 
			@Param("isScore") Integer isScore, @Param("scoreId") Integer scoreId);
	
	public Integer countByParentId(Long id);
	
	public Integer delete(Long id);

	public Page<Article> findAll(@Param("exportType") ExportType exportType, @Param("newsType") NewsType newsType,
			@Param("paperStartTime") String paperStartTime, @Param("paperEndTime") String paperEndTime,
			@Param("appStartTime") String appStartTime, @Param("appEndTime") String appEndTime,
			@Param("paperTitle") String paperTitle, @Param("appTitle") String appTitle,
			@Param("author") String author, @Param("editor") String editor, 
			@Param("isScore") Integer isScore, @Param("scoreId") Integer scoreId,
			@Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize, @Param("orderBy") String orderBy);
	
	public Article findById(Long id);

	public Integer update(Article article);
	
}
