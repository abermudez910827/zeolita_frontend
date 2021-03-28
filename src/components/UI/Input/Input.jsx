import React from "react";

// import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = ["form-control"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("is-invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          id={props.id}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={props.divclass}>
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
      {props.error? <p className="text-danger">{props.error}</p> : null}
    </div>
  );
};

export default input;
