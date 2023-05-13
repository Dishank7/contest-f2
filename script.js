/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    let filteredArr = arr.map((student) => {
      if (student.marks > 50) {
        return student;
      }
    });

    console.log(filteredArr);
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    let filteredArr1 = [];

arr.forEach((student) => {
  if (student.marks > 50) {
    filteredArr1.push(student);
  }
});

console.log(filteredArr1);
  }
  
  function addData() {
    //Write your code here, just console.log
    
arr.push({id:4, name:"susan", age:"20", marks:45});

console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    
let filteredArr2 = arr.filter((student) => {
  return student.marks >= 50;
});

console.log(filteredArr2);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  }
