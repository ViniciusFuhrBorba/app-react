import mock from '../utils/mock';


mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'name': 'Vinicius',
        'username': 'vinicius',
        'email': 'vinicius@gmail.com',
        'avatar': '/images/avatars/avatar_1.jpeg'
    }
});

mock.onPost('/api/home/login').reply((config) => {


    const { email, password } = JSON.parse(config.data);

    if (email !== 'vinicius@gmail.com' || password !== 'admin') {
        return [400, { message: 'Seu email ou senha estão incorretos' }];
    }


    const user = {
        id: 1,
        name: 'Vinicius',
        username: 'vinicius',
        email: 'vinicius@gmail.com',
        avatar: '/images/avatars/avatar_1.jpeg'
    }


    return [200, { user }]

});

mock.onGet('/api/home/user/vinicius').reply(200, {
    id: 1,
    name: 'Vinicius de Borba',
    username: 'vinicius',
    email: 'vinicius@gmail.com',
    accessToken: 'dadadadadadadad',
    avatar: '/images/avatars/avatar_1.jpeg',
    joinedIn: '06 de janeiro, 2020',
    work: 'Analista e Desenvolvedor de Sistemas',
    totalPost: '214',
  });
  


