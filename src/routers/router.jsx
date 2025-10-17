import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../Home/Home/Home';
import ProjectDetail from '../Home/ProjectDetail/ProjectDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'projects/:id',
                element: <ProjectDetail></ProjectDetail>
            }
        ]
    }
]);

export default router;