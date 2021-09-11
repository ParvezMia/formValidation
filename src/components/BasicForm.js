import React from "react";
import useBasicForm from "../hooks/use-basic-form";
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameIsValidCheck,
    reset: resetFirstNameInput,
    enteredValueHandled: enteredFirstNameHandled,
    enteredValueBlurHandled: ennteredFirstNameBlurHandled,
  } = useBasicForm(value => value.trim() !== '');
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameIsValidCheck,
    reset: resetLastNameInput,
    enteredValueHandled: enteredLastNameHandled,
    enteredValueBlurHandled: enteredLastNameBlurHandled,
  } = useBasicForm(value => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsValidCheck,
    reset: resetEmailInput,
    enteredValueHandled: enteredEmailValueHandler,
    enteredValueBlurHandled: enteredEmailBlurHandler,
  } = useBasicForm(value => value.includes('@'));

  let formIsValid = false;
    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
      formIsValid = true;
    }else{
      formIsValid = false;
    }

  const formSubmittedHandler = event => {
    event.preventDefault();

    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }
  const inputFirstNameClassess = enteredFirstNameIsValidCheck ? 'form-control invalid' : 'form-control';
  const inputLastNameClassess= enteredLastNameIsValidCheck? 'form-control invalid' : 'form-control';
  const inputEmailClassess= enteredEmailIsValidCheck? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmittedHandler}>
      <div className="control-group">
        <div className={inputFirstNameClassess}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onBlur={ennteredFirstNameBlurHandled} onChange={enteredFirstNameHandled}/>
          {enteredFirstNameIsValidCheck && <p className="error-text">First Name is Required</p>}
        </div>
        <div className={inputLastNameClassess}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onBlur={enteredLastNameBlurHandled} onChange={enteredLastNameHandled}/>
          {enteredLastNameIsValidCheck && <p className="error-text">Last Name is Required</p>}
        </div>
      </div>
      <div className={inputEmailClassess}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onBlur={enteredEmailBlurHandler} onChange={enteredEmailValueHandler}/>
        {enteredEmailIsValidCheck && <p className="error-text">Valid E-mail is Required</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid ? 'disabled' : ''}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
