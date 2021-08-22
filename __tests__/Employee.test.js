const { exportDefaultDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test('creates an employee Object', () => {
    const employee = new Employee('Mark', 129312, 'mark@gmail.com');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe(129312);
    expect(employee.email).toBe('mark@gmail.com')
});

test('getName returns name', () => {
    const employee = new Employee('Mark', 129312, 'mark@gmail.com')

    expect(employee.getName()).toBe('Mark');
});

test('getID returns ID', () => {
    const employee = new Employee('Mark', 129312, 'mark@gmail.com')

    expect(employee.getId()).toBe(129312);
});

test('getEmail returns email', () => {
    const employee = new Employee('Mark', 129312, 'mark@gmail.com')

    expect(employee.getEmail()).toBe('mark@gmail.com');
});

test('getRole returns Employee', () => {
    const employee = new Employee('Mark', 129312, 'mark@gmail.com')

    expect(employee.getRole()).toBe('Employee');
});

