import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = useCallback(() => {
    const trimmed = newSkill.trim();
    if (!trimmed) return;
    if (skills.includes(trimmed)) return;
    setSkills((prev) => [...prev, trimmed]);
    setNewSkill("");
  }, [newSkill]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToDelete));
  }, []);

  return (
    <div className="container">
      <h1 id="heading">Manage Your Skills</h1>
      <div className="input-container">
        <input
          id="skill-input"
          type="text"
          placeholder="Enter a skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button id="skill-add-btn" onClick={addSkill}>
          Add Skill
        </button>
      </div>
      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
