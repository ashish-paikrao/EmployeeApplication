UPDATE
    [dbo].[DailyLimit]
SET
    [Available] = (?)
WHERE
    (([dbo].[DailyLimit].[LocationCode] = (?)) AND (([dbo].[DailyLimit].[LocationCode] = (?)) AND (([dbo].[DailyLimit].[ScheduleDate] = (?)) AND (([dbo].[DailyLimit].[ScheduleDate] = (?)) AND (([dbo].[DailyLimit].[ScheduleDate] = (?)) AND ([dbo].[DailyLimit].[ScheduleDate] = (?)))))))