UPDATE
    [dbo].[EmployeeSchedule]
SET
    [LocationCode] = (?),
    [ScheduleDate] = (?),
    [SelectedShift] = (?)
WHERE
    ([dbo].[EmployeeSchedule].[UserID] = (?))