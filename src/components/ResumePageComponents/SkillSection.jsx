import styled from 'styled-components';

const SkillSection = ({ sps }) => {
  return (
    <div className="skill-section">
      {/* <!-- 作品描述 --> */}
      <div className="skill">
        <h3 className="skill-name">作品描述</h3>
        <p className="skill-description">
          作品集專案使用 Node.js/ Express 進行後端開發，並搭配 Express-handlebars 進行 server-side
          rendering (SSR) 渲染網頁，觀察並實作各種控制邏輯的開發功能。
        </p>
        <p className="skill-description">
          專案資料部分，使用 Sequelize ORM 框架與關聯式資料庫進行溝通，開發
          Create、Read、Update、Delete（CRUD）等資料操作功能，更詳細的導覽可見於個人的 GitHub 網站。
        </p>
        <p className="skill-description">
          您可使用提供的測試帳號直接登入 Node.js
          專案網站。請注意，初次連線時可能需要等待伺服器重啟，時間最長約為 1 分鐘；若伺服器在 15
          分鐘內沒有偵測到入站流量則會自動關閉。從提供的 Web APIs
          文件連結，亦可直接查看專案的路由設計，以及各條路由的介紹與示範操作。
        </p>
      </div>

      {/* 作品集: 將陣列資料迴圈出來 */}
      {sps.map((sp) => {
        return (
          <div key={sp.id} className="skill image-container">
            <h3 className="skill-name">{sp.title}</h3>
            <div>
              <a
                className="link-formats"
                href={sp.linkGitHub}
                target="_blank"
                rel="noopenner noreferrer"
              >
                <i className="fa-brands fa-github me-1"></i>
                <span>GitHub 頁面</span>
              </a>
              <a
                className="link-formats"
                href={sp.linkWebAPIs}
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span> | Web APIs 文件</span>
              </a>
            </div>

            <div className="mb-2">
              <a
                className="link-formats"
                href={sp.websiteRender}
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>網站入口</span>
              </a>

              <span> | 使用 {sp.language} 開發</span>
            </div>
            <a
              className="link-formats"
              href={sp.websiteRender}
              target="_blank"
              rel="noopenner noreferrer"
            >
              <img className="text-center img-shadow" src={sp.cover} alt={sp.title} />
            </a>

            {/* <!--測試帳號資訊 --> */}
            <ul>
              <div className="mt-2">
                <strong>測試帳號</strong>
              </div>
              <StyledLi className="ms-3">帳號: {sp.root}</StyledLi>
              <StyledLi className="ms-3">帳號: {sp.user1}</StyledLi>
              <StyledLi className="ms-3 mb-3">密碼: {sp.password}</StyledLi>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

// UI 元件樣式
const StyledLi = styled.li`
  white-space: nowrap;
`;

export default SkillSection;
