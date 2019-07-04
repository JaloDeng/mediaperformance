package com.foshanplus.mediaperformance.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foshanplus.mediaperformance.bean.App;
import com.foshanplus.mediaperformance.mapper.AppMapper;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 15:33
 */

@Service
public class ArticleService {

	@Autowired
	private AppMapper appMapper;
	
	public List<App> findApp(Map<String, Object> params) {
		return appMapper.find(params);
	}
	
}
