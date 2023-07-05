import { check } from "express-validator";

const courseValidation = () => {
  return [
    check("firstName")
        .trim().escape().isLength({ min: 2, max: 15 })
        .withMessage("First name must be between 2 and 15 characters"),
    check("lastName")
        .trim().escape().isLength({ min: 2, max: 15 })
        .withMessage("Last name must be between 2 and 15 characters"),
    check("birthDate")
        .trim().escape().isLength({ max: 10 })
        .withMessage("Birth date must be between 4 and 10 characters"),
    check("gender")
        .trim().escape().isLength({ min: 4, max: 10 })
        .withMessage("Gender must be between 4 and 10 characters"),
    check("email") 
        .normalizeEmail().isEmail()
        .withMessage("Email is not valid"),
    check("telephone")
        .isNumeric(),
    check("profession")
        .trim().escape().isLength({ max: 30 })
        .withMessage("Profession must be less than 30 characters"),
    check("street")
        .trim().escape().isLength({ max: 30 })
        .withMessage("Street must be less than 30 characters"),
    check("zipCode")
        .isNumeric(),
    check("city")
        .trim().escape().isLength({ max: 30 })
        .withMessage("City must be less than 30 characters"),
    check("state")
        .trim().escape().isLength({ max: 30 })
        .withMessage("State must be less than 30 characters"),
    check("country")
        .trim().escape().isLength({ max: 30 })
        .withMessage("Country must be less than 30 characters"),
    check("course")
        .trim().escape().isLength({ max: 30 })
        .withMessage("Course must be less than 30 characters"),
    check("courseStart")
        .trim().escape().isLength({ max: 10 })
        .withMessage("Course Start must be less than 10 characters")
  ]
}

export default courseValidation