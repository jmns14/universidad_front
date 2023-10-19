import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteList from '../views/EstudianteList.vue'
import EstudianteNew from '../views/EstudianteNew.vue'
import EstudianteEdit from '../views/EstudianteEdit.vue'
import EstudianteView from '../views/EstudianteView.vue'
import ProfesorList from '../views/ProfesorList.vue'
import ProfesorNew from '../views/ProfesorNew.vue'
import ProfesorEdit from '../views/ProfesorEdit.vue'
import ProfesorView from '../views/ProfesorView.vue'
import AsignaturaList from '../views/AsignaturaList.vue'
import AsignaturaNew from '../views/AsignaturaNew.vue'
import AsignaturaEdit from '../views/AsignaturaEdit.vue'
import AsignaturaView from '../views/AsignaturaView.vue'
import AsignarMateria from '../views/AsignarMateria.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiantes',
    name: 'estudiantes_list',
    component: EstudianteList
  },
  {
    path: '/estudiantes/create',
    name: 'estudiantes_create',
    component: EstudianteNew
  },
  {
    path: '/estudiantes/edit/:id',
    name: 'estudiantes_edit',
    component: EstudianteEdit
  },
  {
    path: '/estudiantes/view/:id',
    name: 'estudiantes_view',
    component: EstudianteView
  },
  {
    path: '/profesores',
    name: 'profesores_list',
    component: ProfesorList
  },
  {
    path: '/profesores/create',
    name: 'profesores_create',
    component: ProfesorNew
  },
  {
    path: '/profesores/edit/:id',
    name: 'profesores_edit',
    component: ProfesorEdit
  },
  {
    path: '/profesores/view/:id',
    name: 'profesores_view',
    component: ProfesorView
  },
  {
    path: '/asignaturas',
    name: 'asignaturas_list',
    component: AsignaturaList
  },
  {
    path: '/asignaturas/create',
    name: 'asignaturas_create',
    component: AsignaturaNew
  },
  {
    path: '/asignaturas/edit/:id',
    name: 'asignaturas_edit',
    component: AsignaturaEdit
  },
  {
    path: '/asignaturas/view/:id',
    name: 'asignaturas_view',
    component: AsignaturaView
  },
  {
    path: '/asignar_materia',
    name: 'asignar_materia',
    component: AsignarMateria
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
