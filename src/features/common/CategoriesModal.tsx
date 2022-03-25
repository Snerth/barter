import React, { ChangeEvent } from "react";
import { useState } from "react";
import "./CategoriesModal.css";

export const CategoriesModal: React.FC<any> = ({ setShowCategories }) => {
  const categoriesList = [
    "Vehicles",
    "Real Estate",
    "Smartphones",
    "Mobile accessories",
    "Computers",
    "Clothes",
    "Shoes",
    "Furniture",
    "Household appliances",
    "Beauty products",
    "Health products",
    "Everything for kids",
    "Pet food",
    "Pet accessories",
    "Plants",
    "Books",
    "Works of art",
    "Music instruments",
    "Construction and repair",
    "Others",
  ];
  const subcategoriesList = [
    [
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
    [
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
    ["Spare parts", "Repair", "Others"],
    ["Spare parts", "Others"],
    ["Office equipment", "Accessories", "Repair", "Others"],
    ["Women", "Men", "Kids"],
    ["Women", "Men", "Kids"],
    ["Cushioned furniture", "Tables", "Chairs", "Storage", "Kitchen", "Others"],
    ["Kitchenware", "Textile", "Rugs", "Bathroom accessories", "Others"],
    ["Perfume", "Cosmetics", "Manicure", "Others"],
    ["Others"],
    ["Others"],
    ["Others"],
    ["Others"],
    ["Others"],
    ["Others"],
    ["Others"],
    ["Others"],
    ["Others"],
  ];
  interface subcatogoryState {
    subcategoryIndex: number;
    showSubcategory: boolean;
  }
  const [showSubcategories, setShowSubcategories] = useState<subcatogoryState>({
    subcategoryIndex: 0,
    showSubcategory: false,
  });
  const handleShowSubcategories = (categoryIndex: number) => {
    setShowSubcategories((prev) => ({
      subcategoryIndex: categoryIndex,
      showSubcategory: !prev.showSubcategory,
    }));
  };
  return (
    <div
      className="categories-modal-backdrop"
      onClick={() => setShowCategories()}
    >
      <div className="categories-modal-container">
        <div className="categories-list">
          {categoriesList && categoriesList.map((category, index) => {
            <div
              className="category"
              onMouseEnter={() => handleShowSubcategories(index)}
              onMouseLeave={() => handleShowSubcategories(index)}
              key={index}
            >
              {category}
            </div>;
          })}
        </div>
        <div className="subcategories-list">
          {showSubcategories.showSubcategory &&
            subcategoriesList[showSubcategories.subcategoryIndex].map(
              (subcategory, index) => {
                <div className="subcategory" key={subcategory + index}></div>;
              }
            )}
        </div>
      </div>
    </div>
  );
};
