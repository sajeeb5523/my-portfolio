import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        
    }
]);

export default router;
