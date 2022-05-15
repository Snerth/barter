import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { SignIn } from "./features/sign-in/SignIn";
import { WelcomePage } from "./features/welcome/WelcomePage";
import { SignUp } from "./features/sign-up/SignUp";
import { ForgotPassword } from "./features/forgot-password/ForgotPassword";
import { Overview } from "./features/overview/Overview";
import { trades, usersArr } from "./features/common/mocks/mocks";
import { ITrade, IUser, TradeStatus } from "./features/types/Types";
import { SignUpContinue } from "./features/sign-up-continue/SignUpContinue"

function App() {
  const [users, setUsers] = useState<IUser[]>(usersArr);
  const [newUser, setNewUser] = useState({})

  const [tradesList, setTradesList] = useState<ITrade[]>(trades);
  const [filteredTradesList, setFilteredTradesList] =
    useState<ITrade[]>(tradesList);
  const [currentUserTrades, setCurrentUserTrades] = useState<ITrade[]>([]);

  const searchTradesByName = (name: string) => {
    setFilteredTradesList(
      tradesList.filter((trade) => {
        return trade.title
          .toLowerCase()
          .trim()
          .includes(name.toLowerCase().trim());
      })
    );
  };
  const [showUserTrades, setShowUserTrades] = useState<boolean>(false);

  const handleSetShowUserTrades = () => {
    setShowUserTrades(!showUserTrades);
    if (showUserTrades) {
      setFilteredTradesList([...tradesList]);
    } else {
      setFilteredTradesList([...currentUserTrades]);
    }
  };

  const checkDoesUserExist = (login: string, password: string): boolean => {
    return users.filter(
      (user) => user.login === login && user.password === password
    ).length
      ? true
      : false;
  };

  const handleAddTrade = (tradeName: string, tradeDescription?: string) => {
    setTradesList((prev: ITrade[]) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 10000000),
        title: tradeName,
        description: tradeDescription || "",
        status: TradeStatus.open,
        owner: users[0],
        pictures: [
          "https://picsum.photos/400/500",
          "https://picsum.photos/401/500",
          "https://picsum.photos/400/501",
          "https://picsum.photos/402/500",
          "https://picsum.photos/400/502",
          "https://picsum.photos/403/500",
        ],
      },
    ]);
    setFilteredTradesList([...tradesList]);
    setCurrentUserTrades((prev: ITrade[]) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 10000000),
        title: tradeName,
        description: tradeDescription || "",
        status: TradeStatus.open,
        owner: users[0],
        pictures: [
          "https://picsum.photos/400/500",
          "https://picsum.photos/401/500",
          "https://picsum.photos/400/501",
          "https://picsum.photos/402/500",
          "https://picsum.photos/400/502",
          "https://picsum.photos/403/500",
        ],
      },
    ]);
  };

  const [evaluationTeam, setEvaluationTeam] = useState<IUser[]>();
  const [evaluation, setEvaluation] = useState<number>(0);

  const handleEvaluate = (): void => {
    setEvaluation(Math.floor(Math.random() * 100));
  };

  const handleUploadPictures = () => {};

  const handleContinueRegistration = (login: string, password: string) => {
    setNewUser({...newUser, login, password})
  };

  const handleAskForEvaluation = (
    evaluationTeamSize: number,
    randomChecked?: boolean,
    ageChecked?: boolean,
    youngChecked?: boolean,
    adultChecked?: boolean,
    middleAgeChecked?: boolean,
    olderAgeChecked?: boolean
  ): void => {
    let evaluationTeam: IUser[] = [];
    if (randomChecked) {
      users.map((user, index) => {
        if (index < evaluationTeamSize) {
          evaluationTeam.push(user);
        }
      });
    } else if (ageChecked) {
      users.map((user, index) => {
        if (
          (youngChecked && index < evaluationTeamSize && user.age < 25) ||
          (adultChecked && user.age > 25 && user.age < 35) ||
          (middleAgeChecked && user.age > 35 && user.age < 45) ||
          (olderAgeChecked && user.age > 45)
        ) {
          evaluationTeam.push(user);
        }
      });
    }
    setEvaluationTeam([...evaluationTeam]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/sign-in"
          element={<SignIn checkDoesUserExist={checkDoesUserExist} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp handleContinueRegistration={handleContinueRegistration} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/sign-up/continue"
          element={<SignUpContinue />}
        />
        <Route
          path="/overview"
          element={
            <Overview
              evaluationTeam={evaluationTeam}
              filteredTradesList={filteredTradesList}
              handleAddTrade={handleAddTrade}
              searchTradesByName={searchTradesByName}
              handleAskForEvaluation={handleAskForEvaluation}
              handleEvaluate={handleEvaluate}
              evaluation={evaluation}
              handleSetShowUserTrades={handleSetShowUserTrades}
              showUserTrades={showUserTrades}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
