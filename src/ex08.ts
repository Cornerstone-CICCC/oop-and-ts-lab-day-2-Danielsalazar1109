// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.

interface Employee {
  name: string;
  role: string;
  salary: number;
}

interface Company {
  name: string;
  address: string;
  employees: Employee[];
}

function updateCompany(company: Company, updates: Partial<Company>): Company {
  const updatedEmployees = company.employees.map(employee => {
    const updatedEmployee = updates.employees?.find(e => e.name === employee.name);
    return updatedEmployee ? { ...employee, ...updatedEmployee } : employee;
  });

  return {
    ...company,
    ...updates,
    employees: updatedEmployees,
  };
}

// Expected output:
const company = { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Developer", salary: 100000 }] };
console.log(updateCompany(company, { employees: [{ name: "Alice", role: "Senior Developer" }] }))
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }