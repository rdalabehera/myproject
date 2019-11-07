export const allServices = {
    addStudent,
    viewStudents,
    deleteStudent
};

function addStudent(student) {
  if (student) {
      var students = JSON.parse(localStorage.getItem('students'));
      if(students === null){
        students = [];
      }
      students.push(student);
      localStorage.setItem('students', JSON.stringify(students));
      return student;
  }
  return null;
}

function viewStudents(){
  var students = JSON.parse(localStorage.getItem('students'));
  console.log(students)
  return students === null ? [] : students;
}
function deleteStudent(e){
  var students = JSON.parse(localStorage.getItem('students'));
  console.log('rashmi'+e)
  students.splice(e,1);
  localStorage.setItem('students', JSON.stringify(students));
  console.log(students)
  return students === null ? [] : students;
}
