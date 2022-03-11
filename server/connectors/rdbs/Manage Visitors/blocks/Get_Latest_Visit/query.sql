SELECT
    [Visits].[StartTime] AS [StartTime], 
    [Visits].[EndTime] AS [EndTime], 
    [Visits].[Status] AS [Status], 
    [Visits].[UserId] AS [UserId], 
    [Visits].[Id] AS [Id], 
    [Visits].[StartTemperature] AS [StartTemperature],
    [Visits].[EndTemperature] AS [EndTemperature], 
    [Visits].[Id] AS [_key]
FROM
    (SELECT TOP 1 *
    FROM [dbo].[Visits]
    WHERE ([dbo].[Visits].[UserId] = (?))
    ORDER BY [StartTime] DESC )
    [Visits]

