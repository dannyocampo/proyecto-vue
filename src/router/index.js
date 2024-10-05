import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },
    */
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue')
    },
    {
      path: '/Lista-de-Tareas',
      name: 'ListadeTareas',
      component: () => import('../modules/listadeTareas/components/ListadeTareas.vue')
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/registrarView.vue')
    },
  ]
})

export default router
