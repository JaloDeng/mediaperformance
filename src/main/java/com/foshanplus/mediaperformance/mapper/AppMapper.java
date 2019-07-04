package com.foshanplus.mediaperformance.mapper;

import java.util.List;
import java.util.Map;

import com.foshanplus.mediaperformance.bean.App;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 14:06
 */

public interface AppMapper {

	public List<App> find(Map<String, Object> params);
	
}
