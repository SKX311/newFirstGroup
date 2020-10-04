import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeHouse',
    component: () => import('../views/home/HomeHouse.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/Coach',
    name: 'Coach',
    component: () => import('../views/home/Coach.vue'),
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: () => import('../views/home/Calendar.vue'),
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: () => import('../views/home/Feedback.vue'),
  },
  {
    path: '/TeacherDetails',
    name: 'TeacherDetails',
    component: () => import('../views/home/TeacherDetails.vue'),
  },
  {
    path: '/CourseHome',
    name: 'CourseHome',
    component: () => import('../views/course/CourseHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/ExerciseHome',
    name: 'ExerciseHome',
    component: () => import('../views/exercise/ExerciseHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/MainHome',
    name: 'MainHome',
    component: () => import('../views/main/MainHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/MessageNotificatio',
    name: 'MessageNotificatio',
    component: () => import('../views/home/MessageNotificatio.vue'),
  },
  {
    path: '/RecordHome',
    name: 'RecordHome',
    component: () => import('../views/record/RecordHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/main/Login.vue'),
    meta: {
      showTabbar: false,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
router.beforeEach((to, from, next) => {
  var TOKEN = localStorage.getItem('token')
  if (to.name == 'Login' || to.name == 'SmsLogin' || to.name == 'Username') {
    next()
  } else {
    if (TOKEN) {
      next()
    } else {
      next('/login')
    }
  }
})
