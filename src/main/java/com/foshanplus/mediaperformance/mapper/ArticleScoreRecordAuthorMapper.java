package com.foshanplus.mediaperformance.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.foshanplus.mediaperformance.entity.ArticleScoreRecordAuthor;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-17 16:37
 */

public interface ArticleScoreRecordAuthorMapper {

	public Integer add(ArticleScoreRecordAuthor articleScoreRecordAuthor);
	
	public void deleteByIds(@Param("ids") List<Long> ids);
	
	public List<Long> findIdsByScoreRecordId(@Param("scoreRecordId") Long scoreRecordId);
	
	public Integer update(ArticleScoreRecordAuthor articleScoreRecordAuthor);
}
