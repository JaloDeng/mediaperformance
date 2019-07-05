package com.foshanplus.mediaperformance.mapper;

import java.util.List;
import java.util.Map;

import com.foshanplus.mediaperformance.bean.Article;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 14:06
 */

public interface ArticleMapper {

	public List<Article> findApp(Map<String, Object> params);
	
}
