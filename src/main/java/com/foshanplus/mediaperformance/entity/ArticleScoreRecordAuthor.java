package com.foshanplus.mediaperformance.entity;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 16:14
 */

public class ArticleScoreRecordAuthor {
	
	private Long id;
	
	private Long scoreRecordId;
	
	private String author;
	
	private BigDecimal percent;
	
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

	public Long getScoreRecordId() {
		return scoreRecordId;
	}

	public void setScoreRecordId(Long scoreRecordId) {
		this.scoreRecordId = scoreRecordId;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public BigDecimal getPercent() {
		return percent;
	}

	public void setPercent(BigDecimal percent) {
		this.percent = percent;
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
