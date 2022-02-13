const Engineer= require('../lib/Engineer');

test('make a engineer object', () =>
{
    const engineer= new Engineer('Sam', 6382, 'random@aol.com', 'samguiler');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.name).toEqual('Sam');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.id).toEqual(6382);
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.email).toEqual('random@aol.com');
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.github).toEqual('samguiler');
});