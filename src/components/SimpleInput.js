import { useState } from "react";
import "../index.css";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    console.log(enteredName);
  };

  const nameInputClassess = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassess}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          value={enteredName}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name Must not Be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
