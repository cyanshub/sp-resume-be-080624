import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

// 導入 bootstrap 樣式庫
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

// 定義專案基礎路徑
const basename = import.meta.env.VITE_PUBLIC_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/resumes" element={<ResumePage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
