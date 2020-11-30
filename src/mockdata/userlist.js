const generateKey = (pre) => {
    return `${ pre }_${Math.ceil(Math.random() * 1000000000)}`;
}

export default [
    {
        id: 1,
        username: generateKey('user'),
        email: generateKey('email'),
        group: 'admin',
        created_at: new Date().getTime(),
        updated_at: new Date().getTime() + 1
    },
    {
        id: 2,
        username: generateKey('user'),
        email: generateKey('email'),
        group: 'member',
        created_at: new Date().getTime(),
        updated_at: new Date().getTime() + 1
    },
    {
        id: 3,
        username: generateKey('user'),
        email: generateKey('email'),
        group: 'member',
        created_at: new Date().getTime(),
        updated_at: new Date().getTime() + 1
    },
    {
        id: 4,
        username: generateKey('user'),
        email: generateKey('email'),
        group: 'admin',
        created_at: new Date().getTime(),
        updated_at: new Date().getTime() + 1
    }
]
    

