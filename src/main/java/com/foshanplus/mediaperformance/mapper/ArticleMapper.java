package com.foshanplus.mediaperformance.mapper;

import java.util.Map;

import com.foshanplus.mediaperformance.bean.Article;
import com.github.pagehelper.Page;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 14:06
 */

public interface ArticleMapper {

	public Integer add(Article article);
	
	public void delete(Long id);

	public Page<Article> find(Map<String, Object> params);

	public Article findById(Long id);

	public void update(Article article);

}
