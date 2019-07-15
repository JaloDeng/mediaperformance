/*
MySQL 
Database: media_performance
*/

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `media_performance`.`t_app_click_count`;
DROP TABLE IF EXISTS `media_performance`.`t_article`;
CREATE TABLE `t_app_click_count` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `click_count` int(11) DEFAULT NULL COMMENT '浏览量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章浏览量统计';
CREATE TABLE `t_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `type` tinyint(4) DEFAULT NULL COMMENT '类型，1：只发APP，2：先发纸媒再发APP，3：先发APP再发纸媒，4：只发报纸',
  `newsSourceId` bigint(20) DEFAULT NULL COMMENT '采编平台新闻t_newssource.id，newssourceid',
  `paperPublishTime` date DEFAULT NULL COMMENT '见报日期',
  `appPublishTime` datetime DEFAULT NULL COMMENT 'APP发布时间',
  `page` varchar(50) DEFAULT NULL COMMENT '版面',
  `category` varchar(100) DEFAULT NULL COMMENT '栏目、板块',
  `articleType` varchar(100) DEFAULT NULL COMMENT '稿件类别',
  `paperTitle` varchar(500) DEFAULT NULL COMMENT '见报标题',
  `appTitle` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `editor` varchar(200) DEFAULT NULL COMMENT '编辑',
  `wordCount` int(10) DEFAULT '0' COMMENT '字数',
  `clickCount` int(10) DEFAULT NULL COMMENT '浏览量量',
  `url` varchar(500) DEFAULT NULL COMMENT '链接',
  `level` varchar(50) DEFAULT NULL COMMENT '等级',
  `score` int(10) DEFAULT NULL COMMENT '分数',
  `createUser` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `createTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateUser` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `index_t_article_type` (`type`) USING BTREE COMMENT '文章类型索引',
  KEY `index_t_article_app_title` (`app_title`) USING BTREE COMMENT 'APP标题索引',
  KEY `index_t_article_app_time` (`app_publish_time`) USING BTREE COMMENT 'APP发布时间索引'
) ENGINE=InnoDB AUTO_INCREMENT=3814 DEFAULT CHARSET=utf8mb4 COMMENT='文章统计';
BEGIN;
LOCK TABLES `media_performance`.`t_app_click_count` WRITE;
DELETE FROM `media_performance`.`t_app_click_count`;
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_article` WRITE;
DELETE FROM `media_performance`.`t_article`;
UNLOCK TABLES;
COMMIT;
