import React from 'react';
import '../styles/components/ProjectCard.css'; // 引入對應的 CSS

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" loading="lazy" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="project-links">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer">查看網站</a>}
          {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer">原始碼</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
