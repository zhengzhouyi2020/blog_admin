/**
 * 博客后台路由
 */

 import Layout from '@/layout'
 const API_BASE = process.env.VUE_APP_API_BASE
 
 const ZzyRouter = [
   {
     path: '/zzy',
     component: Layout,
     redirect: '/zzy/index',
     children: [{
       path: 'index',
       name: 'zzyIndex',
       component: () => import('@/views/zzy/index/index'),
       meta: { title: '首页', icon: 'dashboard' }
     }]
   },
 
   {
     path: '/zzy/profile',
     component: Layout,
     redirect: '/zzy/profile/index',
     hidden: true,
     children: [
       {
         path: 'index',
         component: () => import('@/views/zzy/profile/index'),
         name: 'Profile',
         meta: { title: 'Profile', icon: '', noCache: true }
       }
     ]
   },
 
   {
     path: '/zzy/article',
     component: Layout,
     name: 'zzyArticle',
     redirect: '/zzy/article/list',
     meta: {
       title: '文章管理',
       icon: 'form'
     },
     children: [
       {
         path: 'add',
         component: () => import('@/views/zzy/article/add'),
         name: 'zzyArticleAdd',
         meta: { title: '撰写文章', icon: '' }
       },
       {
         path: 'edit/:id(\\d+)',
         component: () => import('@/views/zzy/article/edit'),
         name: 'zzyArticleEdit',
         meta: { title: '文章编辑', noCache: true },
         hidden: true
       },
       {
         path: 'list',
         component: () => import('@/views/zzy/article/index'),
         name: 'zzyArticleList',
         meta: { title: '文章列表', icon: '' }
       }
     ]
   },
 
   {
     path: '/zzy/blog',
     component: Layout,
     name: 'zzyBlog',
     meta: {
       title: '博客管理',
       icon: 'filter'
     },
     children: [
       {
         path: 'category',
         component: () => import('@/views/zzy/blog/category/index'),
         name: 'zzyBlogCategory',
         meta: { title: '分类管理', icon: '' }
       },
       {
         path: 'tag',
         component: () => import('@/views/zzy/blog/tag/index'),
         name: 'zzyBlogTag',
         meta: { title: '标签管理', icon: '' }
       },
       {
         path: 'link',
         component: () => import('@/views/zzy/blog/link/index'),
         name: 'zzyBlogLink',
         meta: { title: '友链管理', icon: '' }
       },
       {
         path: 'comment',
         component: () => import('@/views/zzy/blog/comment/index'),
         name: 'zzyBlogComment',
         meta: { title: '评论管理', icon: '' }
       }
     ]
   },
 
   {
     path: '/zzy/setting',
     component: Layout,
     name: 'zzySetting',
     meta: {
       title: '系统管理',
       icon: 'setting'
     },
     children: [
       {
         path: 'log',
         component: () => import('@/views/zzy/setting/log/index'),
         name: 'zzySettingLog',
         meta: { title: '操作日志', icon: '' }
       },
       {
         path: 'qiniu',
         component: () => import('@/views/zzy/setting/qiniu/index'),
         name: 'zzySettingQiniu',
         meta: { title: '七牛云', icon: '' }
       },
       {
         path: API_BASE + '/swagger-ui.html',
         name: 'zzySettingSwagger',
         meta: { title: 'Swagger', icon: '' }
       }
     ]
   },
   // 需要修改github 的地址
   {
     path: 'github',
     component: Layout,
     children: [
       {
         path: 'https://github.com/TyCoding',
         meta: { title: 'Github', icon: 'link' }
       }
     ]
   }
 ]
 

 export default ZzyRouter