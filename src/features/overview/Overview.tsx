import React from "react";
import { TradeCard } from "../common/TradeCard";
import { Header } from "../common/Header";
import { trades } from "../common/mocks/mocks";
import './Overview.css'
import { Subheader } from "../common/Subheader";

export const Overview: React.FC<any> = () => {
  return (
    <>
      <Header></Header>
      <Subheader ></Subheader>
      <div className="trades-list-container">
        {trades.map((trade, index) => (
          <TradeCard {...trade} key={index}></TradeCard>
        ))}
      </div>
    </>
  );
};
