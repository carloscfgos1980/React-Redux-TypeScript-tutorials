import PropTypes from "prop-types"

Person.protoTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string)
};

const Person = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
            {props.friends.map((friend) => (
                <h1>{friend}</h1>
            ))}
        </div>
    );
};



export default Person;