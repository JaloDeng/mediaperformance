package com.foshanplus.mediaperformance.excel.model;

import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.metadata.BaseRowModel;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-25 11:11
 */

public class ArticleModel extends BaseRowModel {

	@ExcelProperty(value = "见报日期", index = 0)
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
	private String paperPublishTime;
	
	@ExcelProperty(value = "APP发布时间", index = 1)
	private String appPublishTime;
	
	@ExcelProperty(value = "纸媒标题", index = 2)
	private String paperTitle;
	
	@ExcelProperty(value = "APP标题", index = 3)
	private String appTitle;
	
	@ExcelProperty(value = "作者", index = 4)
	private String author;
	
	@ExcelProperty(value = "编辑", index = 5)
	private String editor;
	
	@ExcelProperty(value = "字数", index = 6)
	private Integer wordCount;
	
	@ExcelProperty(value = "浏览量", index = 7)
	private Integer clickCount;
	
	@ExcelProperty(value = "等级", index = 8)
	private String scoreId;
	
	@ExcelProperty(value = "分数", index = 9)
	private Integer score;
	
	@ExcelProperty(value = "链接", index = 10)
	private String url;
	
	@ExcelProperty(value = "备注", index = 11)
	private String remark;

	public String getPaperPublishTime() {
		return paperPublishTime;
	}

	public void setPaperPublishTime(String paperPublishTime) {
		this.paperPublishTime = paperPublishTime;
	}

	public String getAppPublishTime() {
		return appPublishTime;
	}

	public void setAppPublishTime(String appPublishTime) {
		this.appPublishTime = appPublishTime;
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

	public Integer getWordCount() {
		return wordCount;
	}

	public void setWordCount(Integer wordCount) {
		this.wordCount = wordCount;
	}

	public Integer getClickCount() {
		return clickCount;
	}

	public void setClickCount(Integer clickCount) {
		this.clickCount = clickCount;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}
