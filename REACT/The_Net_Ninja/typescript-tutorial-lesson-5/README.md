## TypeScript Tutorial #5 - Explicit Types

https://www.youtube.com/watch?v=__92ek8Xh4o&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=5

# We can declare the variable, like this:

let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

# Declare a variable with mixing type of values:

let uid: string|number;

# Declare Arrays

let ninjas: string[] = []; //This is in case that we only want string values inside the array.

# Declare an array with mixing types of values:

let mixed: (string|number|boolean)[] = [];

# Declare a variable as an object without specifications:

let ninjaOne: object;

# Declare a variable as an object with specifications:

let ninjaTwo: {
name: string,
age: number,
beltColour: string
};
