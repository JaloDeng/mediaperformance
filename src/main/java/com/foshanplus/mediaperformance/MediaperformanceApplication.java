package com.foshanplus.mediaperformance;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@MapperScan({ "com.foshanplus.mediaperformance.mapper" })
@SpringBootApplication
@EnableTransactionManagement
public class MediaperformanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediaperformanceApplication.class, args);
	}

}
