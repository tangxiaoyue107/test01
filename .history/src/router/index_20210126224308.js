import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import study_show from'../views/study_show.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name:'index',
    redirect:'index',
  },
  {
    
    path: '/index', 
    name:'index',
    component:index,
  },
  {
    path: '/study_show',
    name: 'study_show',
    component: study_show,
    redirect:'study_show/study_show_one',
    children:[
      {
        path:'study_show_one',
        name:'study_show_one',
        component:()=>import('../components/study_show.vue')
      },
      {
        path:"study_show_major",
        name:'study_show_major',
        component:()=>import('../components/study_show_major.vue')
      }
    ]
  },
  {
    path: '/fruit_show',
    name: 'fruit_show',
    redirect:'/fruit_show/paper',
    component:()=>import('../views/fruit_show.vue'),
    children:[
      {
        path:'article',
        name:'article',
        component:()=>import('../components/fruit_page/article.vue'),
      },
      {
        path:'article/article_detail',
        name:'article_detail',
        component:()=>import('../components/fruit_page/article_detail/article_detail.vue'),
      },
      {
        path:"paper",
        name:'paper',
        component:()=>import('../components/fruit_page/paper.vue')
      },
      {
        path:'paper/paper_detail',
        name:'paper_detail',
        component:()=>import('../components/fruit_page/paper_detail/paper_detail.vue'),
      },
      {
        path:"patent",
        name:'patent',
        component:()=>import('../components/fruit_page/patent.vue')
      },
      {
        path:'patent/patent_detail',
        name:'patent_detail',
        component:()=>import('../components/fruit_page/patent_detail/patent_detail.vue'),
      },
    ]
  },
  {
    path: '/info',
    name: 'info',
    redirect:'/info/infolist',
    component: () => import('../views/info.vue'),
    children:[
      {
        path:'infolist',
        name:'infolist',
        component:()=>import('../components/info_page/infolist.vue'),
      },
      {
        path:'infolist/info_detail',
        name:'article_detail',
        component:()=>import('../components/info_page/info_detail.vue'),
      }, 
      {
        path:'annouced',
        name:'annouced',
        component:()=>import('../components/info_page/annouced.vue'),
      },
      {
        path:'annouced/annouced_detail',
        name:'annouced_detail',
        component:()=>import('../components/info_page/annouced_detail.vue'),
      },
      {
        path:'public_resource',
        name:'public_resource',
        component:()=>import('../components/info_page/public_resource.vue'),
      }, 
      {
        path:'public_resource/public_resource_detail',
        name:'public_resource',
        component:()=>import('../components/info_page/public_resource_detail.vue'),
      }, 
    ]
  },
  {
    path: '/people',
    name: 'people',
    redirect:'/people/groupPI',
    component: () => import('../views/people.vue'),
    children:[
      {
        path:'groupPI',
        name:'groupPI',
        component:()=>import('../components/people_page/groupPI.vue'),
      },
      {
        path:'teacher',
        name:'teacher',
        component:()=>import('../components/people_page/teacher.vue'),
      },
      {
        path:'teacher/detail',
        name:'teacher/dtail',
        component:()=>import('../components/people_page/teacher_detail.vue'),
      },
      {
        path:'student',
        name:'student',
        component:()=>import('../components/people_page/student.vue'),
      },
    ]
  },
  {
    path: '/wall',
    name: 'wall',
    redirect:'/wall/moment',
    component: () => import('../views/wall.vue'),
    children:[
      {
        path:'moment',
        name:'moment',
        component:()=>import('../components/wall/moment.vue'),
      },
      {
        path:'moment/moment_detail',
        name:'moment_detail',
        component:()=>import('../components/wall/moment_detail.vue'),
      },
      {
        path:'honor',
        name:'honor',
        component:()=>import('../components/wall/honor.vue'),
      },
      {
        path:'honor/honor_detail',
        name:'honor_detail',
        component:()=>import('../components/wall/honor_detail.vue'),
      },
    ]
  },
  {
    path: '/envir',
    name: 'envir',
    component: () => import('../views/envir.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

export default router
