const Manager= require('../lib/Manager');

test('make a manager object', () =>
{
    const manager= new Manager('Sam', 6382, 'random@aol.com', 739);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.name).toEqual('Sam');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.id).toEqual(6382);
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.email).toEqual('random@aol.com');
    expect(manager.getRole()).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(739);
});