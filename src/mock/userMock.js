import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200,{
//     'id':1,
//     'username': 'vinicius',
//     'email': 'vinicius@gmail.com'
// })

mock.onPost('/api/home/login').reply((config) => {


    const { email, password } = JSON.parse(config.data);

    if (email !== 'vinicius@gmail.com' || password !== 'admin') {
        return [400, { message: 'Seu email ou senha estão incorretos' }];
    }


    const user = {
        id: 1,
        name: 'Vinicius',
        username: 'Vinicius',
        email: 'vinicius@gmail.com'
    }


    return [200, { user }]

});