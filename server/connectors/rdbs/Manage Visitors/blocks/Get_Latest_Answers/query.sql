SELECT TOP 1
    Answers.UserId as UserId,
    Answers.QuestionId as QuestionId,
    Answers.Answer as Answer,
    Answers.VisitId as VisitId,
    Answers.Id as Id,
    Answers.Date as Date,
    Answers.FormId as FormId,
    Answers.Id as _key,
    EmployeeTemperatures.Temperature as Temperature
FROM ManageVisitors.dbo.Answers
LEFT JOIN ManageVisitors.dbo.EmployeeTemperatures
ON Answers.FormId = EmployeeTemperatures.AnswersFormId
WHERE Answers.UserId = (?)
ORDER BY Date DESC
