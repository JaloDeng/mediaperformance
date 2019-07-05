package com.foshanplus.mediaperformance.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foshanplus.mediaperformance.bean.Article;
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
	
	@GetMapping("/app")
	public List<Article> findApp(Map<String, Object> params, HttpServletRequest request, HttpServletResponse response) {
		return articleService.findApp(params);
	}
}
