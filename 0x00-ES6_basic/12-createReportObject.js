export default function createReportObject(employeesList) {
  const newReport = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
  return newReport;
}
