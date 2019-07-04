package com.foshanplus.mediaperformance.bean;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 12:11
 */

public class Paper extends Article {

	private String paperPublishTime;
	
	private String page;
	
	private String paperTitle;
	
	public String getPaperPublishTime() {
		return paperPublishTime;
	}

	public void setPaperPublishTime(String paperPublishTime) {
		this.paperPublishTime = paperPublishTime;
	}

	public String getPage() {
		return page;
	}

	public void setPage(String page) {
		this.page = page;
	}

	public String getPaperTitle() {
		return paperTitle;
	}

	public void setPaperTitle(String paperTitle) {
		this.paperTitle = paperTitle;
	}

}
