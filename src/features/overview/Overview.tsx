import React from "react";
import { TradeCard } from "../common/TradeCard";
import { Header } from "../common/Header";
import { trades } from "../common/mocks/mocks";
import './Overview.css'

export const Overview: React.FC<any> = () => {
  return (
    <>
      <Header></Header>
      <div className="trades-list-container">
        {trades.map((trade) => (
          <TradeCard {...trade} key={trade.id}></TradeCard>
        ))}
      </div>
    </>
  );
};
