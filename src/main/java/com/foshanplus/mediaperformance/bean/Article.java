package com.foshanplus.mediaperformance.bean;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 16:14
 */

public class Article {
	
	private Long id;
	
	private Integer type;
	
	private Integer newsType;
	
	private Long newsSourceId;
	
	private Long newsTransferId;
	
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
	private Date paperPublishTime;
	
	private Date appPublishTime;
	
	private String pageName;
	
	private String category;
	
	private String paperTitle;
	
	private String appTitle;
	
	private String author;
	
	private String editor;
	
	private String wordCount;
	
	private String url;
	
	private String scoreId;
	
	private Integer score;
	
	private String createUser;
	
	private Date createTime;
	
	private String updateUser;
	
	private Date updateTime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Integer getNewsType() {
		return newsType;
	}

	public void setNewsType(Integer newsType) {
		this.newsType = newsType;
	}

	public Long getNewsSourceId() {
		return newsSourceId;
	}

	public void setNewsSourceId(Long newsSourceId) {
		this.newsSourceId = newsSourceId;
	}

	public Long getNewsTransferId() {
		return newsTransferId;
	}

	public void setNewsTransferId(Long newsTransferId) {
		this.newsTransferId = newsTransferId;
	}

	public Date getPaperPublishTime() {
		return paperPublishTime;
	}

	public void setPaperPublishTime(Date paperPublishTime) {
		this.paperPublishTime = paperPublishTime;
	}

	public Date getAppPublishTime() {
		return appPublishTime;
	}

	public void setAppPublishTime(Date appPublishTime) {
		this.appPublishTime = appPublishTime;
	}

	public String getPageName() {
		return pageName;
	}

	public void setPageName(String pageName) {
		this.pageName = pageName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
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

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getEditor() {
		return editor;
	}

	public void setEditor(String editor) {
		this.editor = editor;
	}

	public String getWordCount() {
		return wordCount;
	}

	public void setWordCount(String wordCount) {
		this.wordCount = wordCount;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getScoreId() {
		return scoreId;
	}

	public void setScoreId(String scoreId) {
		this.scoreId = scoreId;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getUpdateUser() {
		return updateUser;
	}

	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

}
