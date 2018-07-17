import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
};

// AutheticationService.register({
//   email: 'steve',
//   password: 'test',
// });
