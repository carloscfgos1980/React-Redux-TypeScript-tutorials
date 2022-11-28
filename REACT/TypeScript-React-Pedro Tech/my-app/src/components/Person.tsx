
// interface is used to define the structure of an object. In this case props
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country:string;
};

export enum Country{
    Brazil="Brazil",
    Canada="Canada",
    France ="France"
}

const Person = (props:Props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
            {props.friends.map((friend:string) => (
                <h1>{friend}</h1>
            ))}
            <h1>pr</h1>
        </div>
    );
};



export default Person;