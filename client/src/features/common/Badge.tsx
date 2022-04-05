import React from "react";
import { TradeStatus } from "../types/Types";
import "./Badge.css";

export const Badge: React.FC<any> = ({ badgeType }) => {
  return (
    <>
      {badgeType === TradeStatus.open && (
        <div className="badge-container open-badge-container">open</div>
      )}
      {badgeType === TradeStatus.promised && (
        <div className="badge-container promised-badge-container">promised</div>
      )}
      {badgeType === TradeStatus.traded && (
        <div className="badge-container traded-badge-container">traded</div>
      )}
    </>
  );
};
