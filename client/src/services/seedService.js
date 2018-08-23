import Api from '@/services/Api';

export default {
  getSeeds(search) {
    return Api().get('entries', {
      params: {
        search,
      },
    });
  },
  showSeed(seedId) {
    return Api().get(`seed/${seedId}`);
  },
  postSeed(seed) {
    return Api().post('entries', seed);
  },
  putSeed(seed) {
    return Api().put(`seed/${seed.id}`, seed);
  },
};
