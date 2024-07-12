import React, { useState, ChangeEvent, useEffect } from 'react';

interface NumberDropDownProps {
  toChild: (value: number) => void; // Adjust the type to match what your parent component expects
}

const NumberDropDown: React.FC<NumberDropDownProps> = ({ toChild }) => {
  const [selectedValue, setSelectedValue] = useState<number>(5);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(value);
  };

  // Use useEffect to execute the callback toChild when selectedValue changes
  useEffect(() => {
    toChild(selectedValue);
  }, [selectedValue, toChild]);

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center">
        <div className="flex items-center">
          <h1 className=""> Per&nbsp;Page</h1>
        </div>
      </div>
      <div className="flex items-center">
        <select
          value={selectedValue}
          onChange={handleChange}
          className="mt-1 block w-full p-1 text-base border-gray-300 dark:bg-slate-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {[...Array(6).keys()].map((num) => (
            <option key={num + 5} value={num + 5}>
              {num + 5}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NumberDropDown;
