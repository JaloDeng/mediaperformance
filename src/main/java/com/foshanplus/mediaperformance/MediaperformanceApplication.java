package com.foshanplus.mediaperformance;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan({ "com.foshanplus.mediaperformance.mapper" })
@SpringBootApplication
public class MediaperformanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediaperformanceApplication.class, args);
	}

}
