import Dashboard from './pages/dashboard'
import Users from './pages/users'
import Posts from './pages/posts'

export default [
    {
        path      : '/',
        component : Dashboard,
        name      : 'Dashboard',
        icon      : 'fa-home'
    },
    {
        path      : '/user',
        component : Users,
        name      : 'User settings',
        icon      : 'fa-users',
        children  : [
            {
                path      : '/user/permissions',
                component : Users,
                name      : 'Permmissions'
            },
            {
                path      : '/user/password',
                component : Users,
                name      : 'Change password'
            },
            {
                path      : '/user/department',
                component : Users,
                name      : 'Choose department'
            },
            {
                path      : '/user/rights',
                component : Users,
                name      : 'Rights'
            },
            {
                path      : '/user/profiles',
                component : Users,
                name      : 'Profiles'
            }
        ]
    },
    {
        path      : '/posts',
        component : Posts,
        name      : 'Posts',
        icon      : 'fa-file'
    }
]
