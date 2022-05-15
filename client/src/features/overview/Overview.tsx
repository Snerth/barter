import React, { useState } from "react";
import { TradeCard } from "../common/TradeCard";
import { Header } from "../common/Header";
// import { trades } from "../common/mocks/mocks";
import "./Overview.css";
import { Subheader } from "../common/Subheader";
import { FilterSection } from "../common/FilterSection";
import { AddTradeModal } from "../add-trade-modal/AddTradeModal";
import { ITrade } from "../types/Types";

export const Overview: React.FC<any> = ({
  filteredTradesList,
  handleAddTrade,
  searchTradesByName,
  handleAskForEvaluation,
  handleUploadPictures,
  evaluationTeam,
  handleEvaluate,
  evaluation,
  handleSetShowUserTrades,
  showUserTrades
}) => {
  const [showFiltersSection, setShowFiltersSection] = useState(false);
  const [showAddTradeModal, setShowAddTradeModal] = useState(false);

  const handleSetShowFiltersSection = () => {
    setShowFiltersSection((prev) => !prev);
  };

  const handleSetShowAddTradeModal = () => {
    setShowAddTradeModal((prev) => !prev);
  };
  console.log('filtered-TradesList >> ', filteredTradesList);
  
  return (
    <>
      <Header handleSetShowAddTradeModal={handleSetShowAddTradeModal}></Header>
      <Subheader
        searchTradesByName={searchTradesByName}
        handleSetShowFiltersSection={handleSetShowFiltersSection}
        handleSetShowUserTrades={handleSetShowUserTrades}
        showUserTrades={showUserTrades}
      ></Subheader>
      <div className="trades-list-and-filter">
        <div className="trades-list-container">
          {filteredTradesList.length ? (
            filteredTradesList.map((trade: ITrade, index: number) => (
              <TradeCard {...trade} key={index}></TradeCard>
            ))
          ) : (
            <div className="no-results">No results</div>
          )}
        </div>
        {showFiltersSection && <FilterSection></FilterSection>}
        {showAddTradeModal && (
          <AddTradeModal
            handleAddTrade={handleAddTrade}
            handleSetShowAddTradeModal={handleSetShowAddTradeModal}
            handleAskForEvaluation={handleAskForEvaluation}
            handleUploadPictures={handleUploadPictures}
            evaluationTeam={evaluationTeam}
            handleEvaluate={handleEvaluate}
            evaluation={evaluation}
          ></AddTradeModal>
        )}
      </div>
    </>
  );
};
