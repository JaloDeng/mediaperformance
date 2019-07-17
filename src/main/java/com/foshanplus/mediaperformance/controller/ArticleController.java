package com.foshanplus.mediaperformance.controller;

import java.util.List;

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

import com.foshanplus.mediaperformance.bean.Article;
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
	
}
