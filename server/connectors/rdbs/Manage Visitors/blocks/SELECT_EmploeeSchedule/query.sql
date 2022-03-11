SELECT
    [EmploeeSchedule].[User_id] AS [User_id], 
    [EmploeeSchedule].[DateandTime] AS [DateandTime], 
    [EmploeeSchedule].[Mon1] AS [Mon1], 
    [EmploeeSchedule].[Mon2] AS [Mon2], 
    [EmploeeSchedule].[Tue1] AS [Tue1], 
    [EmploeeSchedule].[Tue2] AS [Tue2], 
    [EmploeeSchedule].[Wed1] AS [Wed1], 
    [EmploeeSchedule].[Wed2] AS [Wed2], 
    [EmploeeSchedule].[Thu1] AS [Thu1], 
    [EmploeeSchedule].[Thu2] AS [Thu2], 
    [EmploeeSchedule].[Fri1] AS [Fri1], 
    [EmploeeSchedule].[Fri2] AS [Fri2], 
    [EmploeeSchedule].[Sat1] AS [Sat1], 
    [EmploeeSchedule].[Sat2] AS [Sat2], 
    [EmploeeSchedule].[Sun1] AS [Sun1], 
    [EmploeeSchedule].[Sun2] AS [Sun2]
FROM
    (SELECT TOP 1 *
    FROM [dbo].[EmploeeSchedule] 
    ORDER BY [User_id] DESC )
    [EmploeeSchedule]

