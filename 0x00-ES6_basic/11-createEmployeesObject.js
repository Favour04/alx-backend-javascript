export default function createEmployeesObject(departmentName, employees) {
  const newEmployees = {
    [departmentName]: employees,
  };
  return newEmployees;
}
