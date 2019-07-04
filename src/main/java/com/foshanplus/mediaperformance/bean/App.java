package com.foshanplus.mediaperformance.bean;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 12:11
 */

public class App extends Article {

	private String appPublishTime;
	
	private String appTitle;
	
	private String clickCount;
	
	private String url;

	public String getAppPublishTime() {
		return appPublishTime;
	}

	public void setAppPublishTime(String appPublishTime) {
		this.appPublishTime = appPublishTime;
	}

	public String getAppTitle() {
		return appTitle;
	}

	public void setAppTitle(String appTitle) {
		this.appTitle = appTitle;
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
