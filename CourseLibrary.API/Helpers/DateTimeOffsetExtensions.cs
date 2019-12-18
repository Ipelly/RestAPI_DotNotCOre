using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EdApp.API.Helpers
{
    public static class DateTimeOffsetExtensions
    {
        public static int GetDayDiff(this DateTimeOffset startDate, DateTimeOffset endDate)
        {
            TimeSpan difference = endDate.Subtract(startDate);

            return difference.Days;
        }
    }
}
