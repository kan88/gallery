import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/index/index';
import Contacts from './pages/contacts/contacts';
import { store } from './state/reduser';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);



export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <RouterProvider router={router} />
        </main>
      </div>
    </Provider>)
}

reportWebVitals();
