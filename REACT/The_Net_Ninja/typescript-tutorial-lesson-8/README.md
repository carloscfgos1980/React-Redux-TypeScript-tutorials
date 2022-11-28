## TypeScript Tutorial #8 - Function Basics

https://www.youtube.com/watch?v=jXoSaX_yFh4&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=8

1. In this case we are stating an 3rd parameter for the function.

const add = (a: number, b: number, c?: number | string) => {
console.log(a + b);
console.log(c);
}

add(5, 10, 'ninja');

2. Declare a 3rd parameter for the function with a default value in case that not 3rd value is passed:

const add = (a: number, b: number, c: number | string = 10): void => {
console.log(a + b);
console.log(c);
}

add(5, 10, 'ninja');
