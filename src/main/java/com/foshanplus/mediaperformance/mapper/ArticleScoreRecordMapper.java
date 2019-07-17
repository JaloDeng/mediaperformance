package com.foshanplus.mediaperformance.mapper;

import org.apache.ibatis.annotations.Param;

import com.foshanplus.mediaperformance.bean.ArticleScoreRecord;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-17 16:37
 */

public interface ArticleScoreRecordMapper {

	public Integer add(ArticleScoreRecord articleScoreRecord);
	
	public Integer countByNewsTransferId(@Param("articleId") Long articleId, @Param("newsTransferId") Long newsTransferId);
	
}
