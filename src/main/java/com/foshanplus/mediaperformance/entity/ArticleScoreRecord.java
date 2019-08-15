package com.foshanplus.mediaperformance.entity;

import java.util.Date;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 16:14
 */

public class ArticleScoreRecord {
	
	private Long id;
	
	private Long parentId;
	
	private Long articleId;
	
	private Long newsSourceId;
	
	private Long newsTransferId;
	
	private String scoreId;
	
	private Integer score;
	
	private Integer sourceCount;
	
	private String remark;
	
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

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
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

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
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

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public Integer getSourceCount() {
		return sourceCount;
	}

	public void setSourceCount(Integer sourceCount) {
		this.sourceCount = sourceCount;
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
