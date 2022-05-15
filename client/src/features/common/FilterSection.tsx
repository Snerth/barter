import React from "react";
import "./FilterSection.css";

export const FilterSection: React.FC<any> = () => {

  const [openChecked, setOpenChecked] = React.useState(false);

  const handleOpenCheck = () => {
    setOpenChecked(!openChecked);
  };

  const [promisedChecked, setPromisedChecked] = React.useState(false);

  const handlePromisedCheck = () => {
    setPromisedChecked(!promisedChecked);
  };

  const [tradedChecked, setTradedChecked] = React.useState(false);

  const handleTradedCheck = () => {
    setTradedChecked(!tradedChecked);
  };

  const [allChecked, setAllChecked] = React.useState(false);

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
  };

  return (
    <div className="filter-section-container">
      <div className="filter-section-content">
        <div className="filter-section">
      <p>Статус товара</p>
      <label className="checkbox-label">
        <input
          checked={openChecked}
          onChange={handleOpenCheck}
          type="checkbox"
        />
        Открытый
      </label>
      <label className="checkbox-label">
        <input checked={promisedChecked} onChange={handlePromisedCheck} type="checkbox" />
        Обещанный
      </label>
      <label className="checkbox-label">
        <input checked={tradedChecked} onChange={handleTradedCheck} type="checkbox" />
        Обменяный
      </label>
      <label className="checkbox-label">
        <input checked={allChecked} onChange={handleAllCheck} type="checkbox" />
        Все
      </label>
      </div>
      </div>
    </div>
  );
};
