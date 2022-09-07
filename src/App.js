import HomePage from "./features/HomePage/page";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={
            <>
              <HomePage />
            </>
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
