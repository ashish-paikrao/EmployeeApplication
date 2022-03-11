UPDATE
    [dbo].[DailyLimit]
SET
    [Available] = (?)
WHERE
    (([dbo].[DailyLimit].[ScheduleDate] = (?)) AND ([dbo].[DailyLimit].[LocationCode] = (?)))