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
    redirect:"/Coachthree",
    children:[
      {
        path: '/Coachone',
        name: 'Coachone',
        component: () => import('../views/home/Coachone.vue'),
      },
      {
        path: '/Coachtwo',
        name: 'Coachtwo',
        component: () => import('../views/home/Coachtwo.vue'),
      },
      {
        path: '/Coachthree',
        name: 'Coachthree',
        component: () => import('../views/home/Coachthree.vue'),
      },
    ]
  },
  
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/main/Search.vue'),
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
  },
  
{
  
    path: '/Collect',
    name: 'Collect',
    component: () => import('../views/main/Collect.vue'),
    meta: {
      showTabbar: false,
    }
 
},
  {
    path: '/Course',
    name: 'Course',
    component: () => import('../views/main/Course.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Money',
    name: 'Money',
    component: () => import('../views/main/Money.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/MoneySize',
    name: 'MoneySize',
    component: () => import('../views/main/MoneySize.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../views/main/Order.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Vip',
    name: 'Vip',
    component: () => import('../views/main/Vip.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/UserLearn',
    name: 'UserLearn',
    component: () => import('../views/main/UserLearn.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import('../views/main/Teacher.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Intercalate',
    name: 'Intercalate',
    component: () => import('../views/main/Intercalate.vue'),
    meta: {
      showTabbar: false,
    }
  },
  {
    path: '/Coachone',
    name: 'Coachone',
    component: () => import('../views/record/Coachone.vue'),
  },
  {
    path: '/Coachtwo',
    name: 'Coachtwo',
    component: () => import('../views/record/Coachtwo.vue'),
  },
  {
    path: '/class_item',
    name: 'class_item',
    component: () => import('../views/record/class_item.vue'),
  },

  {
    path: "/CourseDetails",
    name: "CourseDetails",
    component: () => import("../views/course/CourseDetails.vue")
  }, {
    path: "/Learnnow",
    name: "Learnnow",
    component: () => import("../views/course/Learnnow.vue")
  },
  {
    path: "/Preferentialboxing",
    name: "Preferentialboxing",
    component: () => import("../views/course/Preferentialboxing.vue")
  }, {
    path: "/Studycard",
    name: "Studycard",
    component: () => import("../views/course/Studycard.vue")
  }, {
    path: "/member",
    name: "member",
    component: () => import("../views/course/member.vue")
  },
  {
    path: "/Studycardexchange",
    name: "Studycardexchange",
    component: () => import("../views/course/Studycardexchange.vue")
  },
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