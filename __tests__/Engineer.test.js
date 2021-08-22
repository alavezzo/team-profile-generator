const Engineer = require('../lib/Engineer')


test('creates an Engineer Object', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toBe(129312);
    expect(engineer.email).toBe('mark@gmail.com')
});