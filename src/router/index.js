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
    path: '/centre',
    name: 'centre',
    component: () => import('../views/exercise/practice_item/centre.vue'),
  },
  {
    path: '/enshrine',
    name: 'enshrine',
    component: () => import('../views/exercise/practice_item/enshrine.vue')
  },
  {
    path: '/mistakes',
    name: 'mistakes',
    component: () => import('../views/exercise/practice_item/mistakes.vue'),
  },
  {
    path: '/setvolume',
    name: 'setvolume',
    component: () => import('../views/exercise/practice_item/setvolume.vue'),
    children: [
      {
        path: '/all',
        name: 'all',
        component: () => import('../views/exercise/practice_item/all.vue'),
      },
      {
        path: '/senior',
        name: 'senior',
        component: () => import('../views/exercise/practice_item/senior.vue'),
      },
      {
        path: '/sethx',
        name: 'sethx',
        component: () => import('../views/exercise/practice_item/sethx.vue'),
      },
      {
        path: '/setenlinsh',
        name: 'setenlinsh',
        component: () => import('../views/exercise/practice_item/setenlinsh.vue'),
      },
    ]
  },
  {
    path: '/aeromodelling',
    name: 'aeromodelling',
    component: () => import('../views/exercise/practice_item/aeromodelling.vue'),
  },
  {
    path: '/appraisal',
    name: 'appraisal',
    component: () => import('../views/exercise/practice_item/appraisal.vue'),
  },
  {
    path: '/point',
    name: 'point',
    component: () => import('../views/exercise/practice_item/point.vue'),
    children: [
      {

        path: '/derivation',
        name: 'derivation',
        component: () => import('../views/exercise/practice_item/derivation.vue'),
      },
      {
        path: '/limitation',
        name: 'limitation',
        component: () => import('../views/exercise/practice_item/limitation.vue'),
      },
      {
        path: '/biology',
        name: 'biology',
        component: () => import('../views/exercise/practice_item/biology.vue'),
      },
      {
        path: '/chemistry',
        name: 'chemistry',
        component: () => import('../views/exercise/practice_item/chemistry.vue'),
      },
      {
        path: '/math',
        name: 'math',
        component: () => import('../views/exercise/practice_item/math.vue'),
      },
      {
        path: '/physics',
        name: 'physics',
        component: () => import('../views/exercise/practice_item/physics.vue'),
      },
      {
        path: '/english',
        name: 'english',
        component: () => import('../views/exercise/practice_item/english.vue'),
      }
    ]
  }, {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/main/Login.vue'),
    meta: {
      showTabbar: false,
<<<<<<< HEAD
    },
=======
    }
  },
  {
    path: '/RetrievePassword',
    name: 'RetrievePassword',
    component: () => import('../views/main/RetrievePassword.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Verification',
    name: 'Verification',
    component: () => import('../views/main/Verification.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/main/My.vue'),
    meta: {
      showTabbar: false,
    }
>>>>>>> 3cef59b40da7ca70abf94039d91cc620eb446195
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
  if (to.name == 'Login' || to.name == 'Verification' || to.name == 'RetrievePassword') {
    next()
  } else {
    if (TOKEN) {
      next()
    } else {
      next('/login')
    }
  }
})


// 
