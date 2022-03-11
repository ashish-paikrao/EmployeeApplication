SELECT
    [EmployeeSchedule].[UserID] AS [UserID], 
    [EmployeeSchedule].[LocationCode] AS [LocationCode], 
    [EmployeeSchedule].[ScheduleDate] AS [ScheduleDate], 
    [EmployeeSchedule].[SelectedShift] AS [SelectedShift]
FROM
    (SELECT * FROM [dbo].[EmployeeSchedule]
    WHERE (([dbo].[EmployeeSchedule].[UserID] = (?)) AND (([dbo].[EmployeeSchedule].[ScheduleDate] = (?)) AND (([dbo].[EmployeeSchedule].[ScheduleDate] = (?)) AND (([dbo].[EmployeeSchedule].[LocationCode] = (?)) AND ([dbo].[EmployeeSchedule].[SelectedShift] = (?)))))))
    [EmployeeSchedule]

