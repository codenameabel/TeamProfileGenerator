const { expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Abel', 1234, 'newabelmartinez@gmail.com');
  
    expect(employee).toEqual(expect.any(Object));
});

test('checks if name is a string', () => {
    const employee = new Employee('Star Buck', 1234, 'starbucks@gmail.com');
  
    expect(employee.name).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    const employee = new Employee('Sandy Cheeks', 1234, 'treedome@gmail.com');
    
    expect(employee.id).toEqual(expect.any(Number));
});

test('checks if email is a string', () => {
    const employee = new Employee('Eugene Krabs', 1234, 'Krustykrab@gmail.com');
    
    expect(employee.email).toEqual(expect.any(String));
});