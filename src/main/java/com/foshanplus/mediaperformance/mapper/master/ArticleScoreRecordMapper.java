package com.foshanplus.mediaperformance.mapper.master;

import org.apache.ibatis.annotations.Param;

import com.foshanplus.mediaperformance.entity.master.ArticleScoreRecord;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-17 16:37
 */

public interface ArticleScoreRecordMapper {

	public Integer add(ArticleScoreRecord articleScoreRecord);
	
	public Integer update(ArticleScoreRecord articleScoreRecord);
	
	public Integer countByArticleId(@Param("articleId") Long articleId);
	
}
