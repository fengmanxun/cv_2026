import React from 'react';
import { useResumeData } from '../contexts/ResumeDataContext';

const PersonalInfo: React.FC = () => {
  const { resume } = useResumeData();

  if (!resume) return null;

  const { personalInfo } = resume;

  return (
    <section className="resume-section text-center py-5">
      <h1 className="display-4">{personalInfo.name}</h1>
      <p className="lead">{personalInfo.title}</p>
      <div className="contact-info mt-4">
        <ul className="list-unstyled">
          <li className="mb-2">
          {personalInfo.emailTitle}: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </li>
          <li className="mb-2">
          {personalInfo.phoneTitle}: {personalInfo.phone}
          </li>
          <li className="mb-2">
          {personalInfo.wechatqrTitle}: <a href={`./qr/#${personalInfo.wechatqr}`} target="_blank" rel="noopener noreferrer">{personalInfo.wechatqr}</a>
          </li>
          <li className="mb-2">
          {personalInfo.wechatidTitle}: <a href={`https://${personalInfo.wechatid}`} target="_blank" rel="noopener noreferrer">{personalInfo.wechatid}</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PersonalInfo;
