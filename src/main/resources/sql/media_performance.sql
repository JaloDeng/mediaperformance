/*
MySQL Backup
Database: media_performance
Backup Time: 2019-07-04 15:38:12
*/

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `media_performance`.`t_app`;
DROP TABLE IF EXISTS `media_performance`.`t_app_paper`;
DROP TABLE IF EXISTS `media_performance`.`t_paper`;
DROP TABLE IF EXISTS `media_performance`.`t_paper_app`;
CREATE TABLE `t_app` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `app_publish_time` varchar(100) DEFAULT NULL COMMENT 'APP发布时间',
  `category` varchar(100) DEFAULT NULL COMMENT '栏目、板块',
  `app_title` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `article_type` varchar(100) DEFAULT NULL COMMENT '稿件类别',
  `editor` varchar(200) DEFAULT NULL COMMENT '编辑',
  `word_count` int(10) DEFAULT '0' COMMENT '字数',
  `click_count` int(10) DEFAULT NULL COMMENT '点击量',
  `url` varchar(500) DEFAULT NULL COMMENT '链接',
  `level` varchar(50) DEFAULT NULL COMMENT '等级',
  `score` int(10) DEFAULT NULL COMMENT '分数',
  `create_user` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_user` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='佛山+APP文章数据';
CREATE TABLE `t_app_paper` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `paper_publish_time` varchar(100) DEFAULT NULL COMMENT '见报时间',
  `page` varchar(50) DEFAULT NULL COMMENT '版面',
  `category` varchar(100) DEFAULT NULL COMMENT '栏目、板块',
  `paper_title` varchar(500) DEFAULT NULL COMMENT '见报标题',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `article_type` varchar(100) DEFAULT NULL COMMENT '稿件类别',
  `editor` varchar(200) DEFAULT NULL COMMENT '编辑',
  `app_title` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `app_publish_time` varchar(100) DEFAULT NULL COMMENT 'APP发布时间',
  `word_count` int(10) DEFAULT '0' COMMENT '字数',
  `click_count` int(10) DEFAULT NULL COMMENT '点击量',
  `url` varchar(500) DEFAULT NULL COMMENT '链接',
  `level` varchar(50) DEFAULT NULL COMMENT '等级',
  `score` int(10) DEFAULT NULL COMMENT '分数',
  `create_user` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_user` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='先发APP后见报数据';
CREATE TABLE `t_paper` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `paper_publish_time` varchar(100) DEFAULT NULL COMMENT '见报时间',
  `page` varchar(50) DEFAULT NULL COMMENT '版面',
  `category` varchar(100) DEFAULT NULL COMMENT '栏目、板块',
  `paper_title` varchar(500) DEFAULT NULL COMMENT '见报标题',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `article_type` varchar(100) DEFAULT NULL COMMENT '稿件类别',
  `editor` varchar(200) DEFAULT NULL COMMENT '编辑',
  `word_count` int(10) DEFAULT '0' COMMENT '字数',
  `level` varchar(50) DEFAULT NULL COMMENT '等级',
  `score` int(10) DEFAULT NULL COMMENT '分数',
  `create_user` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_user` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='纸媒文章数据';
CREATE TABLE `t_paper_app` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `paper_publish_time` varchar(100) DEFAULT NULL COMMENT '见报时间',
  `page` varchar(50) DEFAULT NULL COMMENT '版面',
  `category` varchar(100) DEFAULT NULL COMMENT '栏目、板块',
  `paper_title` varchar(500) DEFAULT NULL COMMENT '见报标题',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `article_type` varchar(100) DEFAULT NULL COMMENT '稿件类别',
  `editor` varchar(200) DEFAULT NULL COMMENT '编辑',
  `app_title` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `app_publish_time` varchar(100) DEFAULT NULL COMMENT 'APP发布时间',
  `word_count` int(10) DEFAULT '0' COMMENT '字数',
  `click_count` int(10) DEFAULT NULL COMMENT '点击量',
  `url` varchar(500) DEFAULT NULL COMMENT '链接',
  `level` varchar(50) DEFAULT NULL COMMENT '等级',
  `score` int(10) DEFAULT NULL COMMENT '分数',
  `create_user` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_user` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='先见报再发APP数据';
BEGIN;
LOCK TABLES `media_performance`.`t_app` WRITE;
DELETE FROM `media_performance`.`t_app`;
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_app_paper` WRITE;
DELETE FROM `media_performance`.`t_app_paper`;
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_paper` WRITE;
DELETE FROM `media_performance`.`t_paper`;
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_paper_app` WRITE;
DELETE FROM `media_performance`.`t_paper_app`;
UNLOCK TABLES;
COMMIT;
