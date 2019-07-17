package com.foshanplus.mediaperformance.bean;

import java.util.Date;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 16:14
 */

public class ArticleScoreRecord {
	
	private Long id;
	
	private Long articleId;
	
	private Long newsSourceId;
	
	private Long newsTransferId;
	
	private String scoreId;
	
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

	public Long getArticleId() {
		return articleId;
	}

	public void setArticleId(Long articleId) {
		this.articleId = articleId;
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

	public String getScoreId() {
		return scoreId;
	}

	public void setScoreId(String scoreId) {
		this.scoreId = scoreId;
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
