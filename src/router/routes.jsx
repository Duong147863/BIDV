import Home from '../pages/Home/Home'

import HomePage from '../pages/Home/HomePage'
import Login from '../pages/Login/Login'

import SecurePay from '../pages/Others/SecurePay/SecurePay'
import YourBill from '../pages/Others/YourBill/YourBill'

const routes = [
    {
        path: '/',
        element: <Home />,
        index: true
    },
    {
        path: '/homepage',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/yourbill',
        element: <YourBill />
    },
    {
        path: '/securepay',
        element: <SecurePay />
    },

]

export default routes