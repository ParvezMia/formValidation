import {useState} from "react";



const useBasicForm = (validValues) => {
  const[enteredValue, setEnteredValue] = useState('');
  const[enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = validValues(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueIsTouched;

  const enteredValueHandled = event => {
    setEnteredValue(event.target.value);
  }
  const enteredValueBlurHandled = () => {
    setEnteredValueIsTouched(true);
  }
  const reset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  }

  return{
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    reset,
    enteredValueHandled,
    enteredValueBlurHandled,
  }

}

export default useBasicForm;