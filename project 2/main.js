//DOM elements
const studentForm =document.getElementById('studentForm');
const studentContainer =document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];
/* 
{
name:'''
age: ""
roll:''
}
*/ 
const students = JSON.parse(localStorage.getItem('students'))||[];

const addStudent=(name,age,roll)=> {
 students.push({
    name,
    age,
    roll
 })
 localStorage.setItem("students",JSON.stringify(students))
 return{name, age, roll};
}
const createStudentElement= ({name,age,roll})=>{
    //create element
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");
//fill the content
    studentName.innerText = "student name: "+name;
    studentAge.innerText = "student age: "+age;
    studentRoll.innerText = "student roll: "+ roll;
//add to the DOM
    studentDiv.append(studentName,  studentAge, studentRoll );
    studentContainer.appendChild( studentDiv);
    studentContainer.style.display=students.length == 0? "none":"flex"

}
studentContainer.style.display=students.length == 0? "none":"flex"

students.forEach(createStudentElement)

studentForm.onsubmit= e =>{
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  )
  createStudentElement(newStudent)
  nameInput.value= ''
  ageInput.value=''
  rollInput.value=''
};