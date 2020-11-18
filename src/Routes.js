import Vue from "vue";
import VueBreadcrumbs from "vue-2-breadcrumbs";

import User from "./components/User.vue";
import UserDetail from "./components/UserDetail.vue";

Vue.use(VueBreadcrumbs);

console.log(VueBreadcrumbs)

export const routes = [
  {
    path: "/",
    name: "Home",
    component: User,
    meta: { breadcrumb: "Home B" },
    children: [
      {
        path: '/1',
        component: UserDetail,
        meta: {
          breadcrumb: 'UserDetail'
        }
      },
    ]
  },
];
