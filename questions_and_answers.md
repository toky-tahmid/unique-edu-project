<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>
The value of greetign is an  empty object. so when i consoled the value greetign then it prints the answer empty object
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}
sum(1, "2");
```
- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C 
<i>Write your explanation here</i>
This code means to sum to numbers but unfortunately the answer is 12 because the value first one is a number and the other one is a string so when i try to get the result it's automatically calculated both of them are string so the value is 12
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>
In the first Line a const variable food is created.In the second Line one object named info is created the value of a property favoriteFood is the first element of the food array.In the third Line the info object's property value is changed When i console it the value will not gonna change because in the info object the value is changed not the food array so the result will be the same
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
This code defines a function and the function is  'sayHi' and there is parameter given in the function that is 'name' and when i return its  value is a string and the parameter is same but when the code consoles there is a call back function which don't have any parameters so the result will be Hi there, undefined.there is no parameter so undefined will be the parameter value.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
Firstly there is a variable and the value starts with 0.There is nums array and  it has four numbers. Now looping over the nums using the foreach method if number is not 0 then there will be  1 added in the count.In this array the number 1,2,3 are the prime numbers so the value of count is 3 because there are three numbers which are prime numbers.
</p>
</details>
