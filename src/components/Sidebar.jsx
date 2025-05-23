import React from "react";
import { Slider } from "antd";

const Sidebar = ({ priceRange, setPriceRange, minLimit, maxLimit }) => {

  const onChange = (value) => {
    setPriceRange(value);
  };

  return (
    <aside className="w-64 bg-purple-700 text-white p-6 rounded-l-xl select-none">
      <h2 className="text-2xl font-bold mb-8">Uzum Market</h2>

      <ul className="space-y-6 mb-8">
        <li className="hover:text-purple-300 cursor-pointer">Home</li>
        <li className="hover:text-purple-300 cursor-pointer">Categories</li>
        <li className="hover:text-purple-300 cursor-pointer">Cart</li>
        <li className="hover:text-purple-300 cursor-pointer">Profile</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold mb-4">Narx oralig'i</h3>

        <Slider
          range
          min={minLimit}
          max={maxLimit}
          defaultValue={priceRange}
          value={priceRange}
          onChange={onChange}
          tooltipVisible
          tipFormatter={(value) => `$${value}`}
          trackStyle={[{ backgroundColor: "#7c3aed" }]} 
          handleStyle={[
            { borderColor: "#7c3aed" },
            { borderColor: "#7c3aed" },
          ]}
        />

        <div className="flex justify-between mt-2 text-sm font-semibold">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
