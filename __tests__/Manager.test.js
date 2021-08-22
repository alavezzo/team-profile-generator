const Manager = require('../lib/Manager')


test('creates an Manager Object', () => {
    const manager = new Manager('Mark', 129312, 'mark@gmail.com');

    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe(129312);
    expect(manager.email).toBe('mark@gmail.com')
});