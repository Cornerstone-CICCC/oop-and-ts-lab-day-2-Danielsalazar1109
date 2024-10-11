"use strict";
// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.
function updateCompany(company, updates) {
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
console.log(updateCompany(company, { employees: [{ name: "Alice", role: "Senior Developer" }] }));
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }
