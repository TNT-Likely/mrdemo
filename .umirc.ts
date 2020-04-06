import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index', menu: { name: '创建codereview'} },
    { path: '/mine', component: '@/pages/mine', menu: { name: '我发起的codereview'} },
    { path: '/mineJoin', component: '@/pages/mineJoin', menu: { name: '我参与的codereview'} },
    { path: '/openCR', component: '@/pages/openCR', menu: { name: '代合并codereview'} },
    { path: '/summary', component: '@/pages/summary', menu: { name: 'codereview月度汇总'} }
  ],
});
