import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Emails: {props.emails}</p>
      <p>Age: {props.age}</p>
      <p>Married: This Person {props.isMarried ? "is" : "is not"} Married</p>
      <p>Friends: {props.friends.join(", ")}</p>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  emails: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};
