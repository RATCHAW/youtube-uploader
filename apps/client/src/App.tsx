import Providers from "./components/providers";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./lib/routes";

const router = createBrowserRouter(routes);

function App() {
    return (
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    );
}

export default App;
