const Intern = require('../lib/Intern')


test('creates an Intern Object', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com');

    expect(intern.name).toBe('Mark');
    expect(intern.id).toBe(129312);
    expect(intern.email).toBe('mark@gmail.com')
});