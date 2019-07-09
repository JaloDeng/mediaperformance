package com.foshanplus.mediaperformance.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foshanplus.mediaperformance.bean.Article;
import com.foshanplus.mediaperformance.mapper.ArticleMapper;
import com.foshanplus.mediaperformance.result.Result;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 15:33
 */

@Service
public class ArticleService {

	@Autowired
	private ArticleMapper articleMapper;
	
	public Result<List<Article>> findApp(Map<String, Object> params) {
		return new Result<List<Article>>(articleMapper.findApp(params), 1L, 1L, 1L, 1L);
	}
	
}
