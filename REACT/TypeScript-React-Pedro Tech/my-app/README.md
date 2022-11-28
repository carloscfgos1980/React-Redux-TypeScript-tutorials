## ReactJS Course [13] - Typescript | React Type Safety

https://www.youtube.com/watch?v=DhmPNpWPNSg

# INTERFACE is used to define the structure of an object.

Example in src/components/Person.tsx (line 3 -10)

interface Props {
name: string;
email: string;
age: number;
isMarried: boolean;
friends: string[];
country:string;
};

- While looping, we need also to define de parameter. (line 25) Ex:
  {props.friends.map((friend:string) => (

# Functions we need to define the parameters and the return value. Ex:

const age=(name:string):number=>{
return 99
}

# ENUM. Using ENUM. It is a way to condesate the options. In this case we specify in src/components/Person.tsx that it is only possible to choose 3 countries

1. Create the ENUM in the component where it will display this variable (Person.tsx). The structure is a bit similar to interface with slight difference. src/components/Person.tsx(line 12-16). Ex:

export enum Country{
Brazil="Brazil",
Canada="Canada",
France ="France"
}

2. src/app.tsx:
   2.1 = Import the ENUM (line 3)
   import Person, { Country } from './components/Person';

2.2 - Invoque the ENUM (line 24). This behave as an object
country={Country.France}
