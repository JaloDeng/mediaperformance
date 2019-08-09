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
DROP TABLE IF EXISTS `media_performance`.`t_article_score_record_author`;
CREATE TABLE `t_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `exportType` enum('APP','APPTOPAPER','PAPERTOAPP','PAPER') DEFAULT 'APP' COMMENT '导出类型，APP：只发APP、APPTOPAPER：先发APP再发纸媒、PAPERTOAPP：先发纸媒再发APP、PAPER：只发报纸',
  `newsType` enum('TEXT','IMAGE','AUDIOANDVIDEO') DEFAULT 'TEXT' COMMENT '文章类型，TEXT：文字稿、IMAGE：图片稿，AUDIOANDVIDEO：音视频',
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
  KEY `index_t_article_appTitle` (`appTitle`) USING BTREE COMMENT 'APP标题索引',
  KEY `index_t_article_appPublishTime` (`appPublishTime`) USING BTREE COMMENT 'APP发布时间索引',
  KEY `index_t_article_exportType` (`exportType`) USING BTREE COMMENT '导出文章类型索引'
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
  `score` int(11) DEFAULT NULL COMMENT '分数，除手动打分外自动填写',
  `imageCount` int(11) DEFAULT NULL COMMENT '图片数量，当稿件为图片稿时，该栏可以编辑',
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
CREATE TABLE `t_article_score_record_author` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `scoreRecordId` bigint(20) DEFAULT NULL COMMENT '文章评分记录表主键ID，t_article_score_record.id',
  `author` varchar(200) DEFAULT NULL COMMENT '作者',
  `percent` decimal(6,2) DEFAULT NULL COMMENT '百分数占比，100则为100%',
  `createUser` varchar(100) DEFAULT NULL COMMENT '创建用户',
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateUser` varchar(100) DEFAULT NULL COMMENT '更新用户',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `index_t_article_author_score_scoreRecordId` (`scoreRecordId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='作者文章分数百分占比数表';
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
BEGIN;
LOCK TABLES `media_performance`.`t_article_score_record_author` WRITE;
DELETE FROM `media_performance`.`t_article_score_record_author`;
UNLOCK TABLES;
COMMIT;
