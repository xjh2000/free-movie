import {MockHandler} from 'vite-plugin-mock-server'

export default (): MockHandler[] => [
    {
        pattern: '/api/user/login',
        method: 'POST',
        handle: (req, res) => {
            res.end('Hello world!' + req.url)
        }
    },
    {
        pattern: '/api/user/getUserInfo',
        handle: (req, res) => {
            res.end('Hello world!' + req.url)
        }
    }
]