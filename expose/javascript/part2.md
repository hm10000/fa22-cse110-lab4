## Part 2. A Little More of a Challenge...

### Q1.What will happen at line 12 and why? If the code causes an error, explain why.

> Answer: It prints 3 because there are 3 elements in the array for [100, 200, 300]. prices.length is 3

### Q2.What will happen at line 13 and why? If the code causes an error, explain why.

> Answer: It prints 150 because the last discountedPrice will be reassigned at i = 3. prices[2] (0.5) = 300(0.5) = 150.

### Q3.What will happen at line 14 and why? If the code causes an error, explain why.

> **Answer: It prints 150 because final price is also 150 at i = 3. 150(100) / 100 = 150.**

### Q4.What will this function return? Give a brief explanation why. If the code causes an error, explain why.

> **Answer: It returns [50, 100, 150] since finalPrice is gonna be pushed for each loop in discounted array.**

### Q5.What will happen at line 12 and why? If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

> **Answer: The code causes an error because console.log(i) requires to access i, but i is defined by let and in the for loop.**

### Q6.What will happen at line 13 and why? If the code causes an error, explain why.

> **Answer: The code causes an error because discountedPrice is not defined in console.log(discountedPrice). It's defined by let in for loop.**

### Q7.What will happen at line 14 and why? If the code causes an error, explain why.

> **Answer: It prints 150 since finalPrice is defined by let in the function and it's accessed in the same block.**

### Q8.What will this function return? Give a brief explanation. If the code causes an error, explain why.

> **Answer: It returns [50, 100, 150] since discounted variable is defined by let in this function.**

### Q9.What will happen at line 11 and why? If the code causes an error, explain why.

> **Answer: It causes an error, i is defined by let in for loop and console.log(i) is outside of the for loop.**

### Q10.What will happen at line 12 and why? If the code causes an error, explain why.

> **Answer: It prints 3 because length wasn't reassigned.**

### Q11.What will this function return? Give a brief explanation. If the code causes an error, explain why.

> **Answer: It returns [50, 100, 150] because discounted is defined by const, but it's not reassigned. Push function was only used.**

### Q12. Given the above Object, write the notation for:

> **Answer: A. student.name, B. student['Grad Year'], C.student.greeting() D.student['Favorite Teacher'].name E.student.courseLoad[0]**

### Q13.Arithmetic

> **A. '32' because this is stirng, B. 1 because they think it's integer, C. 3 because 3 + 0(null) = 3, D. '3null' because they think it's string, E. 4 because it's true = 1, F. 0 because false = 0, G. '3undefined' because they think + string, H. NaN because they think it's undefined so NaN**

### Q14.Comparison

> **A. true because it's '2' is bigger, B. false because '2' is Lexicographic order
> , C. true because regular equality, D. false because strict equality, E. false because true is not equal to 2, F. true because Boolean(2) is true **

### Q15.Explain the difference between the == and === operators

> **Answer: == is a regular equality check and === is a strict equality operator. === checks the equality without type conversion, but == checks with type conversion.**

### Q17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.

> Answer: The result is [2, 4, 6]. array is [1,2,3] and there's a callback function in newArr.push(callback(array[i])) and 1 => 2, 2 => 4, 3 => 6 in the doSometing function, so it's gonna push(2), push(4), push(6).

### Q19. What is the output of the above code?

> Answer: The output is 1 4 3 2
