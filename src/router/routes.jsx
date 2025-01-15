import Home from '../pages/Home/Home'
import SecurePay from '../pages/Others/SecurePay/SecurePay'
import YourBill from '../pages/Others/YourBill'

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/yourbill',
        element: <YourBill />
    },
    {
        path: '/securepay',
        element: <SecurePay />
    }
]

export default routes