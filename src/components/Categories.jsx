import React from "react";

export const Categories = ({ menuList }) => {
  return (
    <div className='btn-container'>
      {menuList.map((category, index) => {
        return (
          <button type='button' className='filter-btn' key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
