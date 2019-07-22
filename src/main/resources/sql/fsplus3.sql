-- 文章浏览量统计
-- MYSQL

SELECT
	' title'
	,'clickCount'
UNION
SELECT 
n.title, IFNULL(MAX(ne.clickcount), 0) AS clickCount
FROM t_news n
INNER JOIN t_news_ext ne ON ne.newsid = n.id
WHERE DATE_FORMAT(n.publishtime, '%Y-%m-%d') BETWEEN '2019-07-01' AND '2019-07-20'
GROUP BY n.title
;