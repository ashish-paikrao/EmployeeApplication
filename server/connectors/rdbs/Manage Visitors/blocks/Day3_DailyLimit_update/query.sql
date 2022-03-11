

UPDATE
    [dbo].[DailyLimit]
SET
    [Available] = (?)-1
WHERE
    (([dbo].[DailyLimit].[LocationCode] = (?)) AND ([dbo].[DailyLimit].[ScheduleDate] = (?)))