const ExpSection = () => {
  return (
    <div className="experience-section">
      <h2 className="job-experience">工作經歷</h2>

      {/* 經歷 */}
      <div className="experience-item">
        <h3 className="job-title">環境與淨零研究室</h3>
        <span className="company">
          <i className="far fa-building"></i>工研院綠能所 副工程師
        </span>
        <p>
          辦理溫室氣體排放量編輯與國家溫室氣體排放清冊，除了內部審查與討論以外，並透過專家審查會議等形式，確認資料合理性與正確性，確保我國排放量資料符合聯合國氣候變化綱要公約（UNFCCC）標準；並對外公開溫室氣體排放資料，將報告發布於公開網站入口。
        </p>
      </div>
      <hr />

      {/* 經歷 */}
      <div className="experience-item">
        <h3 className="job-title">陽光屋頂百萬座計畫推動</h3>
        <span className="company">
          <i className="far fa-building"></i>工研院綠能所 副工程師(兼任)
        </span>

        <ul>
          <li className="ms-3">協助執行推動計畫</li>
          <li className="ms-3">協助整理談參資料、技術支援</li>
          <li className="ms-3">
            協助辦理彰化縣、雲林縣、高雄市、屏東縣漁業經營結合綠能之區位範圍海岸利用管理可行性規劃報告
          </li>
        </ul>
      </div>
      <hr />

      {/* 經歷 */}
      <div className="experience-item">
        <h3 className="job-title">太陽光電系統與可靠度</h3>
        <span className="company">
          <i className="far fa-building"></i>工研院綠能所 副工程師
        </span>

        <ul>
          <li className="ms-3 ">111年度「太陽光電選址2.0策略推動計畫」(1/1)期中報告/ 研究報告</li>
          <li className="ms-3 ">基於地理資訊系統於太陽光電系統異常檢查之研究/ 太陽能及新能源學刊</li>
          <li className="ms-3 ">111年度太陽光電選址2.0策略推動計畫委辦計畫書/ 研究報告</li>
          <li className="ms-3 ">養菇場結合太陽光電系統系統效益評估報告/ 技術報告</li>
          <li className="ms-3 ">養菇場結合太陽光電系統規劃設計評估/ 技術報告</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default ExpSection;
