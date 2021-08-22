const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager')


test('creates an Manager Object', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com', 987);

    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe(129312);
    expect(manager.email).toBe('mark@gmail.com')
    expect(manager.officeNumber).toBe(987)
});

test('getRole returns Manager', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com');

    expect(manager.getRole()).toBe('Manager');
});