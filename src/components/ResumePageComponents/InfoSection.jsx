const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="avatar">
        <a href="#" className="link-formats">
          <img className="avatar-img" src="./images/avatar.jpg" alt="人像" />
        </a>
      </div>
      <h1 className="name m-2">
        <a className="link-formats" href="#">
          黃晉揚
        </a>
      </h1>
      {/* 聯絡方式 */}
      <div className="m-1 social-media">
        <a
          href="mailto:travel15740@gmail.com"
          className="social-media-link"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <i className="fas fa-envelope fa-lg"></i> Mail me
        </a>
        <span className="social-media-link"> | </span>
        <span className="social-media-link cursor-pointer">Cel. 0922-462897</span>
      </div>

      <div className="title">
        後端工程師 | 擅長：Node.js/Express、MySQL、JavaScript、HTML、CSS、Bootstrap、Git
      </div>
    </div>
  );
};

export default InfoSection;
