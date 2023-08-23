import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth'
import { ToastContainer, toastyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={3000}/>
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
