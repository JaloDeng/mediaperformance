package com.foshanplus.mediaperformance.enums;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-29 10:06
 */

public enum NewsType {

	TEXT("文字稿"),
	IMAGE("图片稿"),
	AUDIOANDVIDEO("音视频");
	
	private String label;

	private NewsType(String label) {
		this.label = label;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public static List<Map<String, Object>> getList() {
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		for (NewsType newsType : values()) {
			Map<String, Object> item = new HashMap<String, Object>();
			item.put("value", newsType);
			item.put("label", newsType.getLabel());
			list.add(item);
		}
		return list;
	}
}
