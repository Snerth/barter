import React, { useState } from "react";
import "./AddButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export const AddButton: React.FC<any> = ({ clicked }) => {
  const [isClicked, setIsClicked] = useState<boolean>(clicked);
  const handleAddButtonClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div onClick={handleAddButtonClick}>
      {isClicked ? (
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="add-button-plus-icon"
          size="2x"
        />
      ) : (
        <FontAwesomeIcon
          icon={faCircleMinus}
          className="add-button-minus-icon"
          size="2x"
        />
      )}
    </div>
  );
};
