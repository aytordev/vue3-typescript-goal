import type { RouteRecordRaw } from 'vue-router';

const modules = import.meta.globEager('./modules/*.ts');
const routes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key: string) => {
  const defaultModule = modules[key].default;
  if (!defaultModule) return;
  const moduleList = Array.isArray(defaultModule)
    ? [...defaultModule]
    : [defaultModule];

  routes.push(...moduleList);
});

export default routes;
