### Q1. What was the bug

> Answer: num1 and num2 are string, so because the data type of result is also string, therefore the result is 1234, not 45.

### Q2. How would you fix it? Include a screenshot of your fix.

> Answer: num1 => Number(num1), num2 => Number(num2)
