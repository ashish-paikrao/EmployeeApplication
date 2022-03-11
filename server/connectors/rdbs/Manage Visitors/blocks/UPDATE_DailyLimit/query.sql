UPDATE DailyLimit
   SET Available= Available - 1
 WHERE ScheduleDate = selecteddate
