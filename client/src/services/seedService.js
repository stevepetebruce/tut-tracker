import Api from '@/services/Api';

export default {
  getSeeds() {
    return Api().get('entries');
  },
  postSeed(seed) {
    return Api().post('entries', seed);
  },
};
