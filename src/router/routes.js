import Home from "@/views/front/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "歡迎",
      login: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "all",
    redirect: "/",
  },
];

export default routes;