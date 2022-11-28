## TypeScript Tutorial #18 - Generics

https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=18

- Fir this example Shaun doens't use the app that he is building.

# 2 examples of generic

1. Create an object (lin 44 - 57):

The "T" allow us to access to the object properties. "<T extends object> to specify is an object" (line 44)

It can be more precise and declare that the object must have a variable (name) as string, like this: (lin 46 - 48)

const addUID = <T extends {name:string}>(obj: T) => {

2. Create an object with interface.

- With "T" we can generically change the type of the variable (line 60)

- in this case we generically condition the variable (data) to be an object (line 66)

- in this case we generically condition the variable (data) to be an string array (line 72)
