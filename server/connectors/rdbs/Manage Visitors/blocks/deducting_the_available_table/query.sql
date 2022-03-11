UPDATE
    [dbo].[DailyLimit]
SET
    [Available] = (?)-1
WHERE
    ([dbo].[DailyLimit].[ScheduleDate] = (?))