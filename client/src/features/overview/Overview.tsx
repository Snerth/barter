import React, { useState } from "react";
import { TradeCard } from "../common/TradeCard";
import { Header } from "../common/Header";
import { trades } from "../common/mocks/mocks";
import "./Overview.css";
import { Subheader } from "../common/Subheader";
import { FilterSection } from "../common/FilterSection";

export const Overview: React.FC<any> = () => {
  const [showFiltersSection, setShowFiltersSection] = useState(false);

  const handleSetShowFiltersSection = () => {
    setShowFiltersSection(prev => !prev)
  }
 
  const [tradesList, setTradesList] = useState(trades);
  const searchTradesByName = (name: string) => {
    setTradesList(
      trades.filter((trade) => {
        return (
          trade.title
            .toLowerCase()
            .trim()
            .includes(name.toLowerCase().trim())
        );
      })
    );
  };
  return (
    <>
      <Header></Header>
      <Subheader searchTradesByName={searchTradesByName} handleSetShowFiltersSection={handleSetShowFiltersSection}></Subheader>
      <div className="trades-list-and-filter">
      <div className="trades-list-container">
        {tradesList.length ? (
          tradesList.map((trade, index) => (
            <TradeCard {...trade} key={index}></TradeCard>
          ))
        ) : (
          <div className="no-results">No results</div>
        )}
      </div>
      {
        showFiltersSection && <FilterSection></FilterSection>
      }
      </div>
    </>
  );
};
