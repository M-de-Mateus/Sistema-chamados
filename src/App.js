import { BrowserRouter } from 'react-router-dom';
import Route from './routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
