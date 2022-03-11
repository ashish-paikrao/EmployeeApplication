SELECT
--    a.QuestionId,
    a.Answer,
--    q.ParentId,
    q.Text
FROM dbo.Answers a
LEFT JOIN dbo.Questions q
    ON q.id = a.QuestionId
WHERE a.FormId = (?)
ORDER BY [QuestionId] DESC
