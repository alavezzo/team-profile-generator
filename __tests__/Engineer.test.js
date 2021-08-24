const Engineer = require('../lib/Engineer')


test('creates an Engineer Object', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toBe(129312);
    expect(engineer.email).toBe('mark@gmail.com')
});

test('getName() returns name', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com')

    expect(engineer.getName()).toBe('Mark');
});

test('getID() returns ID', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com')

    expect(engineer.getId()).toBe(129312);
});

test('getEmail() returns email', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com')

    expect(engineer.getEmail()).toBe('mark@gmail.com');
});

test('getGithub() returns github username', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com', 'markiscool')

    expect(engineer.getGithub()).toBe('markiscool');
});

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('Mark', 129312, 'mark@gmail.com')

    expect(engineer.getRole()).toBe('Engineer');
});