import React from "react";

const Model = ({ glasses }) => {
  return (
    <div className="imgClasses flex container justify-evenly">
      <div className="imgClasses_left"></div>

      <div className="imgClasses_right">
        {glasses && (
          <>
            {/* //hình hiện lên giao diện modal */}
            <img src={glasses.url} alt={glasses.name} className="w-full" />
            <div className="imgLayout">
              <div className="flex justify-between">
                <h2 className="font-bold text-purple-600"> {glasses.name}</h2>
                <p>Price: {glasses.price}</p>
              </div>
              <p className="text-xs text-white">{glasses.desc}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Model;
