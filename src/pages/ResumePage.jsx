import { DescriptionSection, Header, InfoSection, SkillSection } from '../components/ResumePageComponents';

// 載入資料
import { sps } from '../../data.json'


const ResumePage = () => {
  return (
    <>
      <Header />
      <main>
        <InfoSection />
        <DescriptionSection />

        <div className="skill-experience-section">
          <h2>作品集</h2>
          <SkillSection sps = {sps}/>

        </div>
      </main>
    </>
  );
};

export default ResumePage;
