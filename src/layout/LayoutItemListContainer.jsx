import React from "react";
import { Outlet } from "react-router-dom";

const LayoutItemListContainer = () => {
  return (
    <div className='bg-slate-200'>
      <Outlet />
    </div>
  );
};

export default LayoutItemListContainer;
