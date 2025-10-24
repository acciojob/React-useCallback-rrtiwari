import React from "react";

const SkillList = React.memo(({ skills, onDelete }) => {
  console.log("SkillList rendered");
  return (
    <ul className="skill-list">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => onDelete(skill)}
          className="skill-item"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
