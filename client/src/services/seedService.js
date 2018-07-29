import Api from '@/services/Api';

export default {
  getSeeds() {
    return Api().get('seeds');
  },
};
