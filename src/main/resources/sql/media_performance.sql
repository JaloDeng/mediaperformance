/*
MySQL Backup
Database: media_performance
Backup Time: 2019-07-17 12:27:51
*/

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `media_performance`.`t_article`;
DROP TABLE IF EXISTS `media_performance`.`t_article_click_count`;
DROP TABLE IF EXISTS `media_performance`.`t_article_score`;
DROP TABLE IF EXISTS `media_performance`.`t_article_score_record`;
CREATE TABLE `t_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `type` tinyint(4) DEFAULT NULL COMMENT '类型，1：只发APP、2：先发APP再发纸媒、3：先发纸媒再发APP、4：只发报纸',
  `newsType` tinyint(4) DEFAULT NULL COMMENT '文章类型，1：文字稿、2：图片稿，3：音频稿',
  `newsSourceId` bigint(20) DEFAULT NULL COMMENT '采编平台，t_newssource.id、newssourceid',
  `newsTransferId` bigint(20) DEFAULT NULL COMMENT '采编平台，t_newstransfer.id',
  `newsTransferIds` varchar(200) DEFAULT NULL COMMENT '采编平台，t_newstransfer.id，数组用逗号隔开，用于记录组图中但个图片的记录',
  `paperPublishTime` date DEFAULT NULL COMMENT '见报日期',
  `appPublishTime` datetime DEFAULT NULL COMMENT 'APP发布时间',
  `pageName` varchar(50) DEFAULT NULL COMMENT '版面',
  `category` varchar(100) DEFAULT NULL COMMENT 'APP栏目',
  `paperTitle` varchar(500) DEFAULT NULL COMMENT '见报标题',
  `appTitle` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `editor` varchar(200) DEFAULT NULL COMMENT '编辑',
  `wordCount` int(10) DEFAULT '0' COMMENT '字数',
  `url` varchar(500) DEFAULT NULL COMMENT '链接',
  `createUser` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateUser` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `index_t_article_type` (`type`) USING BTREE COMMENT '文章类型索引',
  KEY `index_t_article_appTitle` (`appTitle`) USING BTREE COMMENT 'APP标题索引',
  KEY `index_t_article_appPublishTime` (`appPublishTime`) USING BTREE COMMENT 'APP发布时间索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章统计';
CREATE TABLE `t_article_click_count` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(500) DEFAULT NULL COMMENT 'APP标题',
  `newsSourceId` bigint(20) DEFAULT NULL COMMENT '采编平台，t_newssource.id、newssourceid',
  `newsTransferId` bigint(20) DEFAULT NULL COMMENT '采编平台，t_newstransfer.id',
  `clickCount` int(11) DEFAULT NULL COMMENT '浏览量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章浏览量统计';
CREATE TABLE `t_article_score` (
  `id` varchar(10) NOT NULL COMMENT '主键ID，等级',
  `score` int(11) DEFAULT NULL COMMENT '分数',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='等级评分表';
CREATE TABLE `t_article_score_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `articleId` bigint(20) DEFAULT NULL COMMENT '文章主键ID，t_article.id',
  `newsSourceId` bigint(20) DEFAULT NULL COMMENT '采编平台，t_newssource.id、newssourceid',
  `newsTransferId` bigint(20) DEFAULT NULL COMMENT '采编平台，t_newstransfer.id',
  `scoreId` varchar(10) DEFAULT NULL COMMENT '文章评分表主键ID，t_article_score.id',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `createUser` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateUser` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `index_t_article_score_record_articleId` (`articleId`) USING BTREE,
  KEY `index_t_article_score_record_scoreId` (`scoreId`) USING BTREE,
  KEY `index_t_article_score_record_newsTransferId` (`newsTransferId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章评分记录表';
BEGIN;
LOCK TABLES `media_performance`.`t_article` WRITE;
DELETE FROM `media_performance`.`t_article`;
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_article_click_count` WRITE;
DELETE FROM `media_performance`.`t_article_click_count`; 
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_article_score` WRITE;
DELETE FROM `media_performance`.`t_article_score`;
INSERT INTO `media_performance`.`t_article_score` (`id`,`score`,`description`) VALUES ('A', 80, NULL),('A+', 100, NULL),('A-', 60, NULL),('B', 30, NULL),('B+', 40, NULL),('B-', 20, NULL),('C', 10, NULL),('C+', 15, NULL),('C-', 5, NULL),('手动打分', 0, NULL);
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `media_performance`.`t_article_score_record` WRITE;
DELETE FROM `media_performance`.`t_article_score_record`;
UNLOCK TABLES;
COMMIT;
