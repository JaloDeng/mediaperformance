package com.foshanplus.mediaperformance.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.excel.ExcelWriter;
import com.alibaba.excel.metadata.Sheet;
import com.alibaba.excel.support.ExcelTypeEnum;
import com.foshanplus.mediaperformance.bean.Article;
import com.foshanplus.mediaperformance.bean.ArticleScore;
import com.foshanplus.mediaperformance.excel.model.ArticleModel;
import com.foshanplus.mediaperformance.result.Result;
import com.foshanplus.mediaperformance.service.ArticleService;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 15:35
 */

@RestController
@RequestMapping("/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;
	
	@GetMapping("/export/excel")
	public void exportToExcel(@RequestParam(required = false) Integer type, 
			@RequestParam(required = false) String paperStartTime, @RequestParam(required = false) String paperEndTime,
			@RequestParam(required = false) String appStartTime, @RequestParam(required = false) String appEndTime,
			@RequestParam(required = false) String paperTitle, @RequestParam(required = false) String appTitle,
			@RequestParam(required = false) String author, @RequestParam(required = false) String editor,
			@RequestParam(required = false) Integer isScore, @RequestParam(required = false) Integer scoreId,
			HttpServletRequest request, HttpServletResponse response) {
		ServletOutputStream out = null;
		try {
			out = response.getOutputStream();
		} catch (IOException e) {
			e.printStackTrace();
		}
		ExcelWriter writer = new ExcelWriter(out, ExcelTypeEnum.XLSX, true);
		try {
			String fileName = new String(DateFormat.getDateInstance().format(new Date()).getBytes(), "UTF-8");
			Sheet sheet = new Sheet(1, 0, ArticleModel.class);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/vnd.ms-excel");
			response.setHeader("content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName + ".xlsx", "utf-8"));
			writer.write(articleService.exportToExcel(type, paperStartTime, paperEndTime, appStartTime, appEndTime,
					paperTitle, appTitle, author, editor, isScore, scoreId), sheet);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} finally {
			writer.finish();
			try {
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	@PutMapping("")
	public Result<Article> save(@RequestBody Article article, HttpServletRequest request, HttpServletResponse response) {
		return articleService.save(article);
	}
	
	@DeleteMapping("/{id}")
	public Result<Article> delete(@PathVariable Long id, HttpServletRequest request, HttpServletResponse response) {
		return articleService.delete(id);
	}
	
	@GetMapping("")
	public Result<List<Article>> findAll(@RequestParam(required = false) Integer type, 
			@RequestParam(required = false) String paperStartTime, @RequestParam(required = false) String paperEndTime,
			@RequestParam(required = false) String appStartTime, @RequestParam(required = false) String appEndTime,
			@RequestParam(required = false) String paperTitle, @RequestParam(required = false) String appTitle,
			@RequestParam(required = false) String author, @RequestParam(required = false) String editor,
			@RequestParam(required = false) Integer isScore, @RequestParam(required = false) Integer scoreId,
			@RequestParam(required = false, defaultValue = "1") Integer pageNum, @RequestParam(required = false, defaultValue = "100") Integer pageSize, 
			@RequestParam(required = false) String orderBy, HttpServletRequest request, HttpServletResponse response) {
		return articleService.findAll(type, paperStartTime, paperEndTime, appStartTime, appEndTime, 
				paperTitle, appTitle, author, editor, isScore, scoreId, pageNum, pageSize, orderBy);
	}
	
	@GetMapping("/{id}")
	public Result<Article> findById(@PathVariable Long id, HttpServletRequest request, HttpServletResponse response) {
		return articleService.findById(id);
	}
	
	@GetMapping("/score")
	public Result<List<ArticleScore>> findArticleScoreAll() {
		return articleService.findArticleScoreAll();
	}
}
