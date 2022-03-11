SELECT
    [EmployeeSchedule].[UserID] AS [UserID], 
    [EmployeeSchedule].[LocationCode] AS [LocationCode], 
    [EmployeeSchedule].[ScheduleDate] AS [ScheduleDate], 
    [EmployeeSchedule].[SelectedShift] AS [SelectedShift]
FROM
    (SELECT * FROM [dbo].[EmployeeSchedule]
    WHERE (([dbo].[EmployeeSchedule].[UserID] = (?)) AND (([dbo].[EmployeeSchedule].[ScheduleDate] = (?)) AND (([dbo].[EmployeeSchedule].[SelectedShift] = (?)) AND ([dbo].[EmployeeSchedule].[LocationCode] = (?))))))
    [EmployeeSchedule]

