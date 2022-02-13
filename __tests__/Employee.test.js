const Employee= require('../lib/Employee');

test('make a employee object', () =>
{
    const employee= new Employee('Sam', 6382, 'random@aol.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toEqual('Sam');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getId()).toEqual(6382);
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual('random@aol.com');
    expect(employee.getRole()).toEqual('Employee');
});