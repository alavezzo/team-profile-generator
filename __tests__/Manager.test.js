const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager')


test('creates an Manager Object', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com', 987);

    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe(129312);
    expect(manager.email).toBe('mark@gmail.com')
    expect(manager.officeNumber).toBe(987)
});

test('getName() returns name', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com')

    expect(manager.getName()).toBe('Mark');
});

test('getID() returns ID', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com')

    expect(manager.getId()).toBe(129312);
});

test('getEmail() returns email', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com')

    expect(manager.getEmail()).toBe('mark@gmail.com');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com');

    expect(manager.getRole()).toBe('Manager');
});
