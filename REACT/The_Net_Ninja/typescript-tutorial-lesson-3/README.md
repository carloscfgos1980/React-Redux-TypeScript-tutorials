## TypeScript Tutorial #3 - Type Basics

https://www.youtube.com/watch?v=0DzDqtcxnz0&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=3

- We can shange the value of a variable but not the type. Ex:
  let character = 'mario';

// character = 20; => It wont let us to make this change. It has to be a "string"
character = 'luigi';

We can set the type of variable of constant. This prevent errors in the browser. Ex

const circ = (diameter: number) => {
return diameter \* Math.PI;
};

// console.log(circ('hello'));
console.log(circ(7.5));

When we try to compile circ with a string, which it doesnt make sense to calculate the area of a circle, then it returns an error in the terminal, explaininig that it is not a number. This only take place in TypeScript, the file of JavaScript will not show any difference!
