Website name:Educational Events
website Link: https://unique-edu-project.web.app/

Q.1-Add at least 5 mentioning different features and functionalities of your website?
Ans:

1.Home: There is a responsive nav bar and which contains different routes such as Login,Contact Us,and Events and a functional Login  Logout button. There is 6 type of services we are providing for Educational and Training Events. if i click on them it will redirect me to a new location and there is more information about that specific card. also the home page has two extra sections called Unlimited Possibilities, and Latest News & Articles and as usual a footer.
 
2.Events:There are some upcoming events which are shown in the page the page is static.

3.Contact Us: This page has the information to Contact Us i can put my email and full name and i can write what topic i wanna talk about. It's also a static page.

4.Login: This page contains a Login form there are two options to login one is by creating a new account by toggling the register page and register there and login and a google account login.

5.Private Route: There are some private routes if the user do not login he/she can't get access to see the routes the routes are Contacts Us and the Events alo there is a private route in the home page in the Educational and Training Event card when i click on explore more button it will directly take me to the login page.


##Questions_and_aAnswers

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
