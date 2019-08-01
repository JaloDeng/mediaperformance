-- 2019-07-31接收

DECLARE @StartDate Varchar(10)
DECLARE @EndDate Varchar(10)

--修改查询起始日期
Set @StartDate='2019-07-30'
--修改查询截止日期
Set @EndDate='2019-07-30'

-- 1.只发APP不见报
 SELECT 
 	' appPublishTime' as appPublishTime
 	,'category' as category
 	,'appTitle' as appTitle
 	,'author' as author
 	,'wordCount' as wordCount
 	,'editor' as editor
 	,'url' as url
 	,'newssourceid' as newssourceid
 	,'newsTransferId' as newsTransferId
 	,'exportType' as exportType
 	,'newsType' as newsType
 	,'createUser' as createUser
 	,'updateUser' as updateUser
 	,'newsTransferIds' as newsTransferIds
 union
 SELECT 
 	 APP1.[pagedate] as appPublishTime
 	,(SELECT [pagename] from [qmt_fsrb].[dbo].[t_pagecategory] WHERE [id] = APP1.[pagecategoryid]) as category
 	,APP1.[title] as appTitle
 	,APP1.[author] as author
 	,convert(varchar(10),APP1.[wordcount]) as wordCount
 	,APP1.[editor] as editor
 	,('http://59.38.110.226:8086/ycAppService/preview.do?id=' + convert(varchar(20), APP1.id)) as url
 	,CONVERT(VARCHAR(20), APP1.[newssourceid]) as newssourceid
 	,CONVERT(VARCHAR(20), APP1.[id]) as newsTransferId
 	,'APP' as exportType
 	,(CASE APP1.[newstype] WHEN 1 THEN 'TEXT' WHEN 2 THEN 'IMAGE' WHEN 3 THEN 'AUDIOANDVIDEO' ELSE 'TEXT' END) as newsType
 	,'SYSTEM' as createUser
 	,'SYSTEM' as updateUser
 	,STUFF((SELECT DISTINCT ',' + CONVERT(VARCHAR(10), news.[id]) FROM [qmt_fsrb].[dbo].[t_newstransfer] news WHERE news.newssourceid = APP1.newssourceid and news.newstype = 2 FOR xml path('')), 1, 1, '') as newsTransferIds		--这个不对，前提是此稿被日报取稿后才可以
 FROM [qmt_fsrb].[dbo].[t_newstransfer] APP1 
 where	APP1.mediaid = 6027 
 	and APP1.flag = 2 
 -- 	and (APP1.newssourceid is not null)
 	and APP1.pagedate >= @StartDate + ' 00:00:00' 
 	and APP1.pagedate <= @EndDate + ' 23:59:59'
   and APP1.[author] not in (select [USERNAME] FROM [qmt_fsrb].[dbo].[t_operator])
   and APP1.id not in (
 		SELECT 
 			APP.id
 		FROM [qmt_fsrb].[dbo].[t_newstransfer] APP, [qmt_fsrb].[dbo].[t_newstransfer] PAPER 
 		where PAPER.newssourceid = APP.newssourceid
 			and	PAPER.mediaid = 29 
 			and PAPER.flag = 2 
 			and PAPER.isfitpubed = 1
 			and APP.mediaid = 6027 
 			and APP.flag = 2
 	)
 order by appPublishTime
	
-- 2.先发APP后见报
 SELECT 
 	' appPublishTime' as appPublishTime
 	,'category' as category
 	,'appTitle' as appTitle
 	,'author' as author
 	,'wordCount' as wordCount
 	,'editor' as editor
 	,'url' as url
 	,'paperPublishTime' As paperPublishTime
 	,'paperTitle' as paperTitle
 	,'pageName' as pageName
 	,'newssourceid' as newssourceid
 	,'newsTransferId' as newsTransferId
 	,'exportType' as exportType
 	,'newsType' as newsType
 	,'createUser' as createUser
 	,'updateUser' as updateUser
 	,'newsTransferIds' as newsTransferIds
 union
 SELECT 
 	APP.[pagedate] as appPublishTime
 	,(SELECT [pagename] from [qmt_fsrb].[dbo].[t_pagecategory] WHERE [id]=APP.[pagecategoryid]) as category
 	,APP.[title] as appTitle
 	,APP.[author] as author
 	,convert(varchar(10),APP.[wordcount]) as wordCount
 	,APP.[editor] as editor
 	,('http://59.38.110.226:8086/ycAppService/preview.do?id='+convert(varchar(20), APP.id)) as url
 	,PAPER.[pagedate] As paperPublishTime
 	,PAPER.[title] as paperTitle
 	,(SELECT [pagename] from [qmt_fsrb].[dbo].[t_pagecategory] WHERE [id]=PAPER.[pagecategoryid]) as pageName
 	,CONVERT(VARCHAR(20), APP.[newssourceid]) as newssourceid
 	,CONVERT(VARCHAR(20), APP.[id]) as newsTransferId
 	,'APPTOPAPER' as exportType
 	,(CASE APP.[newstype] WHEN 1 THEN 'TEXT' WHEN 2 THEN 'IMAGE' WHEN 3 THEN 'AUDIOANDVIDEO' ELSE 'TEXT' END) as newsType
 	,'SYSTEM' as createUser
 	,'SYSTEM' as updateUser
 	,STUFF((SELECT DISTINCT ',' + CONVERT(VARCHAR(10), news.[id]) FROM [qmt_fsrb].[dbo].[t_newstransfer] news WHERE news.newssourceid = APP.newssourceid and news.newstype = 2 FOR xml path('')), 1, 1, '') as newsTransferIds
 FROM [qmt_fsrb].[dbo].[t_newstransfer] PAPER, [qmt_fsrb].[dbo].[t_newstransfer] APP 
 where PAPER.newssourceid = APP.newssourceid
 	and	APP.mediaid = 6027 
 	and APP.flag = 2 
 	and APP.pagedate >= @StartDate + ' 00:00:00' 
 	and APP.pagedate <= @EndDate+' 23:59:59'
 	and	PAPER.mediaid = 29 
 	and PAPER.flag = 2 
 	and PAPER.pagedate > Left(APP.pagedate, 10)
 order by appPublishTime
 
-- 3.先见报后发APP
 SELECT 
 	' paperPublishTime' As paperPublishTime
 	,'pageName' as pageName
 	,'paperTitle' as paperTitle
 	,'author' as author
 	,'wordCount' as wordCount
 	,'editor' as editor
 	,'appTitle' as appTitle
 	,'appPublishTime' as appPublishTime
 	,'category' as category
 	,'url' as url
 	,'newssourceid' as newssourceid
 	,'newsTransferId' as newsTransferId
 	,'exportType' as exportType
 	,'newsType' as newsType
 	,'createUser' as createUser
 	,'updateUser' as updateUser
 	,'newsTransferIds' as newsTransferIds
 union
 SELECT 
 	PAPER.[pagedate] As paperPublishTime
 	,(SELECT [pagename] from [qmt_fsrb].[dbo].[t_pagecategory] WHERE [id] = PAPER.[pagecategoryid]) as pageName
 	,PAPER.[title] as paperTitle
 	,PAPER.[author] as author
 	,convert(varchar(10),PAPER.[wordcount]) as wordCount
 	,PAPER.[editor] as editor
 	,APP.[title] as appTitle
 	,APP.[pagedate] as appPublishTime
 	,(SELECT [pagename] from [qmt_fsrb].[dbo].[t_pagecategory] WHERE [id] = APP.[pagecategoryid]) as category
 	,('http://59.38.110.226:8086/ycAppService/preview.do?id='+convert(varchar(20), APP.id)) as url
 	,CONVERT(VARCHAR(20), PAPER.[newssourceid]) as newssourceid
 	,CONVERT(VARCHAR(20), APP.[id]) as newsTransferId
 	,'PAPERTOAPP' as exportType
 	,(CASE PAPER.[newstype] WHEN 1 THEN 'TEXT' WHEN 2 THEN 'IMAGE' WHEN 3 THEN 'AUDIOANDVIDEO' ELSE 'TEXT' END) as newsType
 	,'SYSTEM' as createUser
 	,'SYSTEM' as updateUser
 	,STUFF((SELECT DISTINCT ',' + CONVERT(VARCHAR(10), news.[id]) FROM [qmt_fsrb].[dbo].[t_newstransfer] news WHERE news.newssourceid = PAPER.newssourceid and news.newstype = 2 FOR xml path('')), 1, 1, '') as newsTransferIds
 FROM [qmt_fsrb].[dbo].[t_newstransfer] PAPER, [qmt_fsrb].[dbo].[t_newstransfer] APP 
 where PAPER.newssourceid = APP.newssourceid
 	and	PAPER.mediaid = 29 
 	and PAPER.flag = 2 
 	and PAPER.pagedate >= @StartDate 
 	and PAPER.pagedate <= @EndDate 
 	and PAPER.isfitpubed = 1
 	and APP.mediaid = 6027 
 	and APP.flag = 2 
 	and APP.pagedate> PAPER.pagedate+' 00:00:00'
 order by paperPublishTime

-- 4.只见报不发APP
 SELECT 
 	' paperPublishTime' As paperPublishTime
 	,'pageName' as pageName
 	,'paperTitle' as paperTitle
 	,'author' as author
 	,'wordCount' as wordCount
 	,'editor' as editor
 	,'url' as url
 	,'newssourceid' as newssourceid
 	,'newsTransferId' as newsTransferId
 	,'exportType' as exportType
 	,'newsType' as newsType
 	,'createUser' as createUser
 	,'updateUser' as updateUser
 	,'newsTransferIds' as newsTransferIds
 union
 SELECT 
 	PAPER.[pagedate] As paperPublishTime
   ,(SELECT [pagename] from [qmt_fsrb].[dbo].[t_pagecategory] WHERE [id] = PAPER.[pagecategoryid]) as pageName
 	,PAPER.[title] as paperTitle
 	,PAPER.[author] as author
 	,convert(varchar(10),PAPER.[wordcount]) as wordCount
 	,PAPER.[editor] as editor
 	,('http://59.38.110.226:8086/ycAppService/preview.do?id=' + convert(varchar(20),PAPER.id)) as url
 	,CONVERT(VARCHAR(20), PAPER.[newssourceid]) as newssourceid
 	,CONVERT(VARCHAR(20), PAPER.[id]) as newsTransferId
 	,'PAPER' as exportType
 	,(CASE PAPER.[newstype] WHEN 1 THEN 'TEXT' WHEN 2 THEN 'IMAGE' WHEN 3 THEN 'AUDIOANDVIDEO' ELSE 'TEXT' END) as newsType
 	,'SYSTEM' as createUser
 	,'SYSTEM' as updateUser
 	,STUFF((SELECT DISTINCT ',' + CONVERT(VARCHAR(10), news.[id]) FROM [qmt_fsrb].[dbo].[t_newstransfer] news WHERE news.newssourceid = PAPER.newssourceid and news.newstype = 2 FOR xml path('')), 1, 1, '') as newsTransferIds
 FROM [qmt_fsrb].[dbo].[t_newstransfer] PAPER 
 where	PAPER.mediaid = 29 
 	and PAPER.flag = 2 
 	and PAPER.pagedate >= @StartDate 
 	and PAPER.pagedate <= @EndDate 
 	and PAPER.isfitpubed = 1 
   and PAPER.id not in (
 		SELECT 
 			PAPER1.id
 		FROM [qmt_fsrb].[dbo].[t_newstransfer] APP, [qmt_fsrb].[dbo].[t_newstransfer] PAPER1 
 		where PAPER1.newssourceid = APP.newssourceid
 			and	PAPER1.mediaid = 29 
 			and PAPER1.flag = 2 
 			and PAPER1.isfitpubed = 1
 			and APP.mediaid = 6027 
 			and APP.flag = 2
   )
 order by paperPublishTime