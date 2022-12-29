import { BrowserRouter } from 'react-router-dom';
import Route from './routes'
import AuthProvider from './contexts/auth';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </AuthProvider>
      
  );
}

export default App;
