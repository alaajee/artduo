import React from 'react';
import './TeamMember.css';

function TeamMember({ name, title, image }) {
  return (
    <div className="team-member-card">
      <div className="team-member-image">
        <img src={image} alt={name} />
      </div>
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-title">{title}</p>
      </div>
    </div>
  );
}

export default TeamMember;
