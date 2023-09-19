import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/style.scss';

import WrapperHome from "./pages/Homepage/WrapperHome";
import WrapperMeta from "./pages/Meta/WrapperMeta";

import MainPage from './pages/Homepage/MainPage';
import UnknowBtn from './pages/Homepage/UnknowBtn';

import MetaMainPage from './pages/Meta/MetaMainPage';

import TestPage from 'pages/TestPage';
import Button from 'pages/Homepage/Guide/Button';
import Guide from 'pages/Homepage/Guide/Guide';



function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<WrapperHome><MainPage /></WrapperHome>} />
      <Route path="/UnknowBtn" element={<WrapperHome><UnknowBtn /></WrapperHome>} />
      <Route path="/MetaMainPage" element={<WrapperMeta><MetaMainPage /></WrapperMeta>} />

      <Route path="/test" element={<TestPage />} />
      <Route path="/Button" element={<WrapperHome><Button /></WrapperHome>} />
      <Route path="/Guide" element={<WrapperHome><Guide /></WrapperHome>} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
