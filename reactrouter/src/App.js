import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
// Import your page components here, e.g., import Home from './components/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            // Add your nested routes here, e.g.,
            // { index: true, element: <Home /> },
            // { path: "about", element: <About /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
