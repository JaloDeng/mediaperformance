package com.foshanplus.mediaperformance.bean;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 12:11
 */

public class AppPaper extends Article {

	private String paperPublishTime;
	
	private String page;
	
	private String paperTitle;
	
	private String appTitle;
	
	private String appPublishTime;
	
	private String clickCount;
	
	private String url;

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

	public String getAppTitle() {
		return appTitle;
	}

	public void setAppTitle(String appTitle) {
		this.appTitle = appTitle;
	}

	public String getAppPublishTime() {
		return appPublishTime;
	}

	public void setAppPublishTime(String appPublishTime) {
		this.appPublishTime = appPublishTime;
	}

	public String getClickCount() {
		return clickCount;
	}

	public void setClickCount(String clickCount) {
		this.clickCount = clickCount;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
