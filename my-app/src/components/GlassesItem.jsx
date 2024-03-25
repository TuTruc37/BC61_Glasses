import React from "react";

const GlassesItem = ({ arrGlasses, handleGlasses }) => {
  return (
    <>
      {arrGlasses.map((glassesItem) => (
        <div
          className="border w-2/4 p-5"
          key={glassesItem.id}
          onClick={() => handleGlasses(glassesItem)}
        >
          <img
            src={glassesItem.url}
            alt={glassesItem.name}
            className="w-full"
          />
        </div>
      ))}
    </>
  );
};

export default GlassesItem;
