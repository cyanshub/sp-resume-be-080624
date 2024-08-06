import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
  // 啟用轉址功能
  const navigate = useNavigate();

  // 使用 React Hook: useEffect 工具, 其可在每次畫面渲染時觸發
  useEffect(() => {
    // 故這邊不用判斷 isAuthenticated, 直接導向真首頁即可
    navigate('/resumes');
  }, [navigate]);
};

export default HomePage;
