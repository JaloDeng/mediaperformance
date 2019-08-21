package com.foshanplus.mediaperformance.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-08-21 14:33
 */

@Configuration
@MapperScan(basePackages = "com.foshanplus.mediaperformance.mapper.app", sqlSessionTemplateRef = "appSqlSessionTemplate")
public class AppMapperConfig {

	@Bean(name = "appDataSource")
	@ConfigurationProperties(prefix = "spring.datasource.app")
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}
	
    @Bean(name = "appSqlSessionFactory")
    public SqlSessionFactory sqlSessionFactory(@Qualifier("appDataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setTypeAliasesPackage("com.foshanplus.mediaperformance.entity.app");
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:mybatis/app/*.xml"));
        return bean.getObject();
    }

    @Bean(name = "appTransactionManager")
    public DataSourceTransactionManager transactionManager(@Qualifier("appDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean(name = "appSqlSessionTemplate")
    public SqlSessionTemplate sqlSessionTemplate(@Qualifier("appSqlSessionFactory") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}
