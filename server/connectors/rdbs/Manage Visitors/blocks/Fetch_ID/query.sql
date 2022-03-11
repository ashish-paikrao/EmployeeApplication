SELECT
    [Users].[Email] AS [Email], 
    [Users].[Password] AS [Password], 
    [Users].[Id] AS [Id], 
    [Users].[Role] AS [Role], 
    [Users].[Name] AS [Name], 
    [Users].[Phone] AS [Phone], 
    [Users].[Address] AS [Address], 
    [Users].[EmployeeId] AS [EmployeeId], 
    [Users].[Latitude] AS [Latitude], 
    [Users].[Longitude] AS [Longitude], 
    [Users].[OAuthId] AS [OAuthId], 
    [Users].[Id] AS [_key]
FROM
    (SELECT * FROM [dbo].[Users]
    WHERE ([dbo].[Users].[Email] = (?)))
    [Users]

