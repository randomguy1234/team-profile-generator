const Intern= require('../lib/Intern');

test('make a intern object', () =>
{
    const intern= new Intern('Sam', 6382, 'random@aol.com', 'bank university');

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.name).toEqual('Sam');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.id).toEqual(6382);
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.email).toEqual('random@aol.com');
    expect(intern.getRole()).toEqual('Intern');
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.school).toEqual('bank university');
});