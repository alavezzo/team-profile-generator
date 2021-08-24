const Intern = require('../lib/Intern')


test('creates an Intern Object', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com');

    expect(intern.name).toBe('Mark');
    expect(intern.id).toBe(129312);
    expect(intern.email).toBe('mark@gmail.com')
});

test('getName returns name', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com')

    expect(intern.getName()).toBe('Mark');
});

test('getID() returns ID', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com')

    expect(intern.getId()).toBe(129312);
});

test('getEmail() returns email', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com')

    expect(intern.getEmail()).toBe('mark@gmail.com');
});

test('getSchool() returns school', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com', 'UCSB')

    expect(intern.getSchool()).toBe('UCSB');
});

test('getRole() returns Intern', () => {
    const intern = new Intern('Mark', 129312, 'mark@gmail.com')

    expect(intern.getRole()).toBe('Intern');
});