import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
import { Button } from "./Button";
import { CategoriesModal } from "./CategoriesModal";
import { Input } from "./Input";
import "./Subheader.css";

export const Subheader: React.FC<any> = (props) => {
  const searchInputProps: IInputProps = {
    inputType: InputType.regular,
    label: "Search",
    placeholder: "Enter your search query",
  };

  const [checked, setChecked] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const handleShowCategoriesButtonClick = () => {
      setShowCategories(prev => !prev)
  }
  const handleFilterClick = () => {
    setChecked((prev) => !prev);
  };

  interface ISearchState {
    text: string;
  }

  const [search, setSearch] = useState<ISearchState>({
    text: "",
  });

  const handleSearchChange =
    () => (searchEvent: ChangeEvent<HTMLInputElement>) => {
      searchEvent.persist();
      const search = searchEvent.target.value;
      setSearch({ text: search });
    };

  return (
      <>
      {
          showCategories && <CategoriesModal setShowCategories={setShowCategories}></CategoriesModal>
      }
    <div className="subheader-container">
      <div className="subheader-container-content">
        <Button onClick={handleShowCategoriesButtonClick} buttonColor={ButtonColor.turquoise}>Pick a Category</Button>
        <Input
          {...searchInputProps}
          value={search.text}
          onChange={handleSearchChange()}
        ></Input>
        <FontAwesomeIcon
          icon={faFilter}
          size="2x"
          onClick={handleFilterClick}
          className={`subheader-filter-icon-${
            checked ? "checked" : "unchecked"
          }`}
        ></FontAwesomeIcon>
      </div>
    </div>
    </>
  );
};
