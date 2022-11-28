// To make ir more eye-fiendly we can make compbination of the types for variable, array or objects and reuse in the app


type StringOrNum = string|number; 
type objWithName = {name: string, uid:StringOrNum};

const logDetails =(uid:StringOrNum, item:string)=>{
  console.log(`${item} has a uid of ${uid}`)
}

const greet =(user:objWithName)=>{
  console.log(`${user.name} says Hello`)
}

const greetAgain =(user:objWithName)=>{
  console.log(`${user.name} says Hello`)
}