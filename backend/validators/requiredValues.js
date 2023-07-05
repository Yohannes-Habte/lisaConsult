import { check } from "express-validator";

const requiredValues = (props) => {

  let checkedValues = [];

  props.forEach((field) => {
    checkedValues.push(
      check(field)
        .notEmpty()
        .withMessage(`${field} is required`)
    );
  });

  return checkedValues;
};
export default requiredValues;
