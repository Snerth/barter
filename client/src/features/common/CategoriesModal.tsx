import React, { ChangeEvent } from "react";
import { useState } from "react";
import "./CategoriesModal.css";

export const CategoriesModal: React.FC<any> = ({ setShowCategoriesModal }) => {
  const categoriesList = [
    {
      categoryName: "Vehicles",
      subcategories: [
        "Cars",
        "Bicycles",
        "Motorcycles",
        "Scooters",
        "Spare parts",
        "Rent",
        "Repair",
        "Transportation",
        "Others",
      ],
    },
    {
      categoryName: "Real Estate",
      subcategories: [
        "1 room",
        "2 rooms",
        "3 rooms",
        "4 rooms",
        "5 rooms",
        "More than 5 rooms",
        "Houses",
        "Rent",
        "Others",
      ],
    },
    {
      categoryName: "Smartphones",
      subcategories: ["Spare parts", "Repair", "Others"],
    },
    {
      categoryName: "Books",
      subcategories: ["Book lending", "Books", "Others"],
    },
    {
      categoryName: "Plants",
      subcategories: ["Plants accessories", "Seeds", "Others"],
    },
    {
      categoryName: "Everything for pets",
      subcategories: ["Pet food", "Pet accessories", "Others"],
    },
    {
      categoryName: "Everything for kids",
      subcategories: [
        "Toys",
        "Furniture for kids",
        "Baby carriages",
        "Babysitters",
        "Others",
      ],
    },
    {
      categoryName: "Health products",
      subcategories: [
        "Medicines",
        "Sport accessories",
        "Medical services",
        "Others",
      ],
    },
    {
      categoryName: "Beauty products",
      subcategories: ["Perfume", "Cosmetics", "Manicure", "Others"],
    },
    {
      categoryName: "Household appliances",
      subcategories: [
        "Kitchenware",
        "Textile",
        "Rugs",
        "Bathroom accessories",
        "Others",
      ],
    },
    {
      categoryName: "Furniture",
      subcategories: [
        "Cushioned furniture",
        "Tables",
        "Chairs",
        "Storage",
        "Kitchen",
        "Others",
      ],
    },
    {
      categoryName: "Shoes",
      subcategories: ["Women", "Men", "Kids"],
    },
    {
      categoryName: "Clothes",
      subcategories: ["Women", "Men", "Kids"],
    },
    {
      categoryName: "Computers",
      subcategories: ["Office equipment", "Accessories", "Repair", "Others"],
    },
    {
      categoryName: "Mobile accessories",
      subcategories: ["Spare parts", "Others"],
    },
  ];

  const [showSubcategories, setShowSubcategories] = useState({
    show: true,
    index: 0,
  });
  const handleShowSubcategories = (index: number) => {
    setActiveCategoryIndex(index)
    setShowSubcategories(() => ({ show: true, index }));
  };

  const handleHideSubcategories = (index: number) => {
    setShowSubcategories(() => ({ show: false, index }));
  };

  const handleKeepSubcategoriesListShown = () => {
    setShowSubcategories((prev) => ({show: true, index: prev.index}))
  }

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  return (
    <div
      className="categories-modal-backdrop"
      onClick={() => setShowCategoriesModal()}
    >
      <div className="categories-modal-container">
        <div className="categories-list">
          {categoriesList.map((category, index) => (
            <div
              className={activeCategoryIndex === index ? 'active-category' : 'category'}
              onMouseEnter={() => handleShowSubcategories(index)}
              onMouseLeave={() => handleHideSubcategories(index)}
              key={index}
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        <div className="subcategories-list" onMouseEnter={() => handleKeepSubcategoriesListShown()}>
          {showSubcategories.show &&
            categoriesList[showSubcategories.index].subcategories.map(
              (subcategory, index) => (
                <div className="subcategory" key={subcategory + index}>
                  {subcategory}
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};
