import React, { useState } from "react";
import Toggle from "react-toggle";

export const LightkModeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState < boolean > true;

  return (
    <Toggle
      className="light-mode-toggle"
      checked={isLight}
      onChange={({ target }) => setIsLight(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};
