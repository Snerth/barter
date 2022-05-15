import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
import { Button } from "./Button";
import { CategoriesModal } from "./CategoriesModal";
import { Input } from "./Input";
import "./Subheader.css";

export const Subheader: React.FC<any> = ({ searchTradesByName, handleSetShowFiltersSection, handleSetShowUserTrades, showUserTrades }) => {
  const searchInputProps: IInputProps = {
    inputType: InputType.regular,
    label: "Поиск",
    placeholder: "Введите поисковый запрос",
  };

  const [checked, setChecked] = useState(false);
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);
  const handleShowCategoriesButtonClick = () => {
    setShowCategoriesModal((prev) => !prev);
  };
  
  const handleFilterClick = () => {
    setChecked((prev) => !prev);
    handleSetShowFiltersSection(checked)
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
      searchTradesByName(search)
    };

  return (
    <>
      {showCategoriesModal && (
        <CategoriesModal
          setShowCategoriesModal={setShowCategoriesModal}
        ></CategoriesModal>
      )}
      <div className="subheader-container">
        <div className="subheader-container-content">
          <Button
            onClick={handleShowCategoriesButtonClick}
            buttonColor={ButtonColor.turquoise}
          >
            Выбрать категорию
          </Button>
          <Button onClick={() => handleSetShowUserTrades()} buttonColor={ButtonColor.coral}>{showUserTrades ? "Все товары" : "Мои товары"}</Button>
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
