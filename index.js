// Write your solution in this file!
const employee = {
  name: "Joe",
  streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
  const employee2 = {
    [key]: value, ...employee
  }
  return employee2
}
updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, name, "Sam");

function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {
    ...employee
  }
  delete newEmployee[key];
  return newEmployee;
}
deleteFromEmployeeByKey(employee, name);

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee.name;
  return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, key);