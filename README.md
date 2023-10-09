## Question- 2 

### let greeting;
### greetign = {};
### console.log(greetign);

### Answer -- {}

### Explanation : In this code the variable greeting is declared but not used and instead greeting is assigned an empty object {}  <br/> 
### So when I will try to console using console.log(greeting) , it will print an empty object {} . This is because here greeting is assigned with and empty object {} .



### function sum(a, b) {
###  return a + b;
###   }
###  sum(1, "2");


### Answer -- "12"

### Explanation : The functions returns sum of two numbers a and b . we know if one of the arguments string, javaScript will perform string concatenation . in this case sum(1, '2'), the result would be the string "12" because number 1 is concatenated with the string "2" 

## Question- 3 
### const food = ["🍕", "🍫", "🥑", "🍔"];
### const info = { favoriteFood: food[0] };
### 
### info.favoriteFood = "🍝";
### 
### console.log(food);

### Answer - ['🍕', '🍫', '🥑', '🍔']

### Explanation : The code assigns an array food with four elements . it then creates an object info with a prperty favoriteFood that is initially set to the first element of the food array .<br/> <br/> After that ,the code updates fovoriteFood property of the info object to "🍝" . but when we log food to the console using console.log(food) , it will print the original array ['🍕', '🍫', '🥑', '🍔'] , because the food array is not affected by the change made to favoriteFood property of the info object. 

## Question- 4  
### function sayHi(name) {
###   return `Hi there, $  {name}`;
### }
### 
### console.log(sayHi());


### Explanation : The sayHI function expects parameter name to passed when it is called, in the console.log here sayHi are called without passing any arguments . <br/> <br/> 

### Since we are not providing an argument for the name parameter , it will be undefined inside the function . So the function will return the string "Hi there , undefined"


### Question-5
### let count = 0;
### const nums = [0, 1, 2, 3];
### 
### nums.forEach((num) => {
###   if (num) count += 1;
### });
### 
### console.log(count);

### Answer : 3 

### Explanation : 

### The code initializes a variable count with a value of 0 . and an array nums with four elements [0, 1, 2, 3] . The forEach method is called on the nums array, and for each element in the array, the provided callback function executed . <br/> 

### Inside the callback function, there is an if statement that checks if the num is truthy. In JavaScript, any non-zero number is considered truthy, so all elements except 0 in the nums array will pass this condition. If the condition is true, the count variable is incremented by 1.

### In this case, since the nums array contains three non-zero elements, the count variable will be incremented by 1 for each of those elements. Therefore, the final value of count will be 3, and that will be logged to the console.
