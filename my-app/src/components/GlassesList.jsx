import React from "react";
import GlassesItem from "./GlassesItem";
const GlassesList = ({ arrGlasses, handleGlasses }) => {
  return (
    <div className="container flex bg-white z-10 relative">
      <GlassesItem arrGlasses={arrGlasses} handleGlasses={handleGlasses} />
    </div>
  );
};

export default GlassesList;
