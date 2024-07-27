export default function createIteratorObject(report) {
  const employees = [];
  for (const [key, value] of Object.entries(report.allEmployees)) {
    if (key) {
      employees.push(...value);
    }
  }
  return employees;
}
