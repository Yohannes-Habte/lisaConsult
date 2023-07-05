import Course from "../models/course.js";
import createError from "http-errors";

//=============================================================
//  Post Course
// =============================================================
export const coursePoset = async (req, res, next) => {
  /*
    const { firstName, lastName, birthDate, gender, email, telephone, profession, language, street, zipCode, city, state, country, course, courseStart } = req.body;

    try{
        const courseFound  = await Course.findOne({email: email});
        if(courseFound) {
            const newCourse = new Course({
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate, 
                gender: gender, 
                email: email, 
                telephone: telephone, 
                profession: profession, 
                language: language, 
                street: street, 
                zipCode: zipCode, 
                city: city,
                state: state, 
                country: country, 
                course: course, 
                courseStart: courseStart, 
                //consent: false,
                //amount: amount
            });

            try{
                await newCourse.save();
            }catch(err){
                console.log(err);
                return next(createError(409, "The course is not saved. Please try again."))
            }

            return res.status(201).json({course: newCourse})
        }
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not be queried. Please try again!"))
    }
*/
  
const newCourse = new Course(req.body);
  try {
    const savedCouse = await newCourse.save();
    return res.status(201).json({ course: savedCouse });
  } catch (err) {
    console.log(err);
    return next(createError(500, "Course could not be posted. Please try again"));
  }
};
