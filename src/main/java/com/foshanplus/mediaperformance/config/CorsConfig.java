package com.foshanplus.mediaperformance.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-04 17:16
 */

@Configuration
public class CorsConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("*")
			.allowedHeaders("*")
			.allowCredentials(true)
			.maxAge(3600);
	}
	
}
