
const student = {
    name: 'Sammy',
    age: 23,
    isActive: true,
}

//convert this object into string
const StudentObjToStr = JSON.stringify(student);


const toJSONStudent = JSON.parse(StudentObjToStr);
