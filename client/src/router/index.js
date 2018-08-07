import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Entries from '@/components/Entries';
import CreateEntry from '@/components/CreateEntries';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/entries',
      name: 'entries',
      component: Entries,
    },
    {
      path: '/entries/create',
      name: 'create',
      component: CreateEntry,
    },
    {
      path: '/seed/:seedId',
      name: 'detail',
      component: Detail,
    },
  ],
});
