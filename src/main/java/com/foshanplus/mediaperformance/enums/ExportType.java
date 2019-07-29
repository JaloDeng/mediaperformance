package com.foshanplus.mediaperformance.enums;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-29 15:21
 */

public enum ExportType {

	APP("只发APP"),
	APPTOPAPER("先APP后见报"),
	PAPERTOAPP("先见报后APP"),
	PAPER("只见报");
	
	private String label;

	private ExportType(String label) {
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
		for (ExportType exportType : values()) {
			Map<String, Object> item = new HashMap<String, Object>();
			item.put("value", exportType);
			item.put("label", exportType.getLabel());
			list.add(item);
		}
		return list;
	}
}
