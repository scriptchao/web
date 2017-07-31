export default {
    path: '/',

    component: require('COMPONENT/App').default,

    indexRoute: {
        component: require('COMPONENT/Common/Index').default
    },

    childRoutes: [
        // 路由按模块组织分离，避免单文件代码量过大
        {path: 'login', component: require('COMPONENT/Common/Login').default},
        {path: 'register', component: require('COMPONENT/Common/Register').default},


        {path: 'overview', component: require('COMPONENT/Overview').default},


        {path: 'daily', component: require('COMPONENT/Daily/Index').default},
    ]
}







