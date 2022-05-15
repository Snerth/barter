import React, { ChangeEvent, useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { InputErrorMessage } from "../common/InputErrorMessage";
import {
  ButtonColor,
  IInputProps,
  InputType,
  ITradeNameState,
  IUser,
  TradeNameErrorMessage,
} from "../types/Types";
import "./AddTradeModal.css";
import { Avatar } from "../common/Avatar";
import { API_URL } from '../../config.js'

export const AddTradeModal: React.FC<any> = ({
  handleAddTrade,
  handleSetShowAddTradeModal,
  handleAskForEvaluation,
  handleUploadPictures,
  evaluationTeam,
  handleEvaluate,
  evaluation,
}) => {
  const [isError, setIsError] = useState<boolean>(true);

  const [tradeName, setTradeName] = useState<ITradeNameState>({
    text: "",
    tradeNameInputType: InputType.regular,
    tradeNameErrorMessage: null,
  });

  const tradeNameInputProps: IInputProps = {
    inputType: tradeName.tradeNameInputType,
    label: "Название",
    placeholder: "Введите название товара",
    type: "text",
  };

  const setTradeNameState = (
    tradeNameErrorMessage: TradeNameErrorMessage | null,
    text: string,
    tradeNameInputType: InputType
  ) => {
    setTradeName((prev) => ({
      ...prev,
      tradeNameErrorMessage,
      text,
      tradeNameInputType,
    }));
  };

  const handleTradeNameChange =
    () => (tradeNameEvent: ChangeEvent<HTMLInputElement>) => {
      tradeNameEvent.persist();
      const tradeName = tradeNameEvent.target.value;
      if (tradeName === "") {
        setTradeNameState(
          TradeNameErrorMessage.empty,
          tradeName,
          InputType.error
        );
        setIsError(true);
      } else if (tradeName.length > 20) {
        setTradeNameState(
          TradeNameErrorMessage.moreThanTwentyChars,
          tradeName,
          InputType.error
        );
        setIsError(true);
      } else {
        setTradeNameState(null, tradeName, InputType.regular);
        setIsError(false);
      }
    };

  const [description, setDescription] = React.useState("");

  const handleSetDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const [mainFunctions, setMainFunctions] = React.useState("");
  const handleSetMainFunctions = (event: any) => {
    setMainFunctions(event.target.value);
  };

  const [newChecked, setNewChecked] = React.useState(false);

  const handleNewCheck = () => {
    setNewChecked(!checked);
  };

  const [usedChecked, setUsedChecked] = React.useState(false);

  const handleUsedCheck = () => {
    setUsedChecked(!checked);
  };

  const [visualDefects, setVisualDefects] = React.useState("");
  const handleSetVisualDefects = (event: any) => {
    setVisualDefects(event.target.value);
  };

  const [functionalDefects, setFunctionalDefects] = React.useState("");
  const handleSetFunctionalDefects = (event: any) => {
    setFunctionalDefects(event.target.value);
  };

  const [productionTime, setProductionTime] = React.useState("");
  const handleSetProductionTime = (event: any) => {
    setProductionTime(event.target.value);
  };

  const [guaranteeTime, setGuaranteeTime] = React.useState("");
  const handleSetGuaranteeTime = (event: any) => {
    setGuaranteeTime(event.target.value);
  };

  const [checked, setChecked] = React.useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const [randomChecked, setRandomChecked] = React.useState(false);

  const handleRandomCheck = () => {
    setRandomChecked(!randomChecked);
    setAgeChecked(false);
  };

  const [ageChecked, setAgeChecked] = React.useState(false);

  const handleAgeCheck = () => {
    setAgeChecked(!ageChecked);
    setRandomChecked(false);
  };

  const [youngChecked, setYoungChecked] = React.useState(false);

  const handleYoungCheck = () => {
    setYoungChecked(!youngChecked);
  };

  const [adultChecked, setAdultChecked] = React.useState(false);

  const handleAdultCheck = () => {
    setAdultChecked(!adultChecked);
  };
  const [middleAgeChecked, setMiddleAgeChecked] = React.useState(false);

  const handleMiddleAgeCheck = () => {
    setMiddleAgeChecked(!middleAgeChecked);
  };
  const [olderAgeChecked, setOlderAgeChecked] = React.useState(false);

  const handleOlderAgeCheck = () => {
    setOlderAgeChecked(!olderAgeChecked);
  };

  const [evaluationTeamSize, setEvaluationTeamSize] = useState(0);
  const handleChangeTeamSize =
    () => (teamSizeEvent: ChangeEvent<HTMLInputElement>) => {
      teamSizeEvent.persist();
      const size = teamSizeEvent.target.value;
      setEvaluationTeamSize(+size);
    };
  const [evaluated, setEvaluated] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  const handleUploadImages = (e: any) => {
    const files = Array.from(e.target.files)
    setUploading(true)

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append('' + i, '' + file)
    })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
     setUploading(false);
     setImages(images)
    })
  }

  return (
    <div className="add-trade-modal-backdrop">
      <div className="add-trade-modal-container">
        <p className="add-trade-modal-title">Добавление товара для обмена</p>
        <Input
          {...tradeNameInputProps}
          value={tradeName.text}
          onChange={handleTradeNameChange()}
        ></Input>
        <InputErrorMessage
          errorMessage={tradeName.tradeNameErrorMessage}
        ></InputErrorMessage>
         <p className="add-trade-modal-trade-description">Категория товара</p>
         <Input
          {...tradeNameCategoryProps}
          value={category.text}
          onChange={handleCategoryChange()}
        ></Input>
        <p className="add-trade-modal-trade-description">Описание товара</p>
        <textarea
          className="add-trade-modal-textarea"
          wrap="off"
          value={description}
          onChange={handleSetDescription}
        ></textarea>
        <p className="add-trade-modal-trade-condition">Состояние товара</p>
        <div className="flexbox">
        <label className="checkbox-label">
          <input
            checked={newChecked}
            onChange={handleNewCheck}
            type="checkbox"
          />
          Новый
        </label>
        <label className="checkbox-label">
          <input
            checked={usedChecked}
            onChange={handleUsedCheck}
            type="checkbox"
          />
          Бывший в употреблении
        </label>
        </div>
        <p className="add-trade-modal-trade-functions">
          Основные функции, которые должен выполнять товар
        </p>
        <textarea
          className="add-trade-modal-textarea"
          wrap="off"
          value={mainFunctions}
          onChange={handleSetMainFunctions}
        ></textarea>
        <p className="add-trade-modal-trade-visual-defects">
          Возможные внешние дефекты
        </p>
        <textarea
          className="add-trade-modal-textarea"
          wrap="off"
          value={visualDefects}
          onChange={handleSetVisualDefects}
        ></textarea>
        <p className="add-trade-modal-trade-functional-defects">
          Возможные функциональные дефекты
        </p>
        <textarea
          className="add-trade-modal-textarea"
          wrap="off"
          value={functionalDefects}
          onChange={handleSetFunctionalDefects}
        ></textarea>
        <p className="add-trade-modal-trade-production-time">
          Срок изготовления товара
        </p>
        <textarea
          className="add-trade-modal-textarea"
          wrap="off"
          value={productionTime}
          onChange={handleSetProductionTime}
        ></textarea>
        <p className="add-trade-modal-guarantee-time">Гарантийный срок</p>
        <textarea
          className="add-trade-modal-textarea"
          wrap="off"
          value={guaranteeTime}
          onChange={handleSetGuaranteeTime}
        ></textarea>
        <label className="checkbox-label">
          <input checked={checked} onChange={handleCheck} type="checkbox" />
          Запросить коллективную оценку
        </label>
        {checked && (
          <div className="collective-evaluation-container">
            <div className="settings">
              <p>Укажите количество оценщиков</p>
              <input
                type="number"
                value={evaluationTeamSize}
                onChange={handleChangeTeamSize()}
                className="team-size-input"
              />
              <label className="checkbox-label">
                <input
                  checked={randomChecked}
                  onChange={handleRandomCheck}
                  type="checkbox"
                />
                В случайном порядке
              </label>
              <label className="checkbox-label">
                <input
                  checked={ageChecked}
                  onChange={handleAgeCheck}
                  type="checkbox"
                />
                По возрасту
              </label>
            </div>
            {ageChecked && (
              <div>
                <p>Выберите возраст</p>
                <div className="age-settings">
                  <label className="checkbox-label">
                    <input
                      checked={youngChecked}
                      onChange={handleYoungCheck}
                      type="checkbox"
                    />
                    18-25
                  </label>
                  <label className="checkbox-label">
                    <input
                      checked={adultChecked}
                      onChange={handleAdultCheck}
                      type="checkbox"
                    />
                    25-35
                  </label>
                  <label className="checkbox-label">
                    <input
                      checked={middleAgeChecked}
                      onChange={handleMiddleAgeCheck}
                      type="checkbox"
                    />
                    35-45
                  </label>
                  <label className="checkbox-label">
                    <input
                      checked={olderAgeChecked}
                      onChange={handleOlderAgeCheck}
                      type="checkbox"
                    />
                    45+
                  </label>
                </div>
              </div>
            )}
            <Button
              buttonColor={
                evaluationTeamSize !== 0 &&
                (randomChecked ||
                  (ageChecked &&
                    (youngChecked ||
                      adultChecked ||
                      middleAgeChecked ||
                      olderAgeChecked)))
                  ? ButtonColor.turquoise
                  : ButtonColor.gray
              }
              disabled={
                evaluationTeamSize !== 0 &&
                (randomChecked ||
                  (ageChecked &&
                    (youngChecked ||
                      adultChecked ||
                      middleAgeChecked ||
                      olderAgeChecked)))
                  ? false
                  : true
              }
              onClick={() =>
                handleAskForEvaluation(
                  evaluationTeamSize,
                  randomChecked,
                  ageChecked,
                  youngChecked,
                  adultChecked,
                  middleAgeChecked,
                  olderAgeChecked
                )
              }
            >
              Показать оценщиков
            </Button>
            {evaluationTeam && (
              <div>
                <div className="evaluation-team">
                  {evaluationTeam.map((member: IUser) => {
                    return (
                      <div className="member">
                        <Avatar picture={member.picture}></Avatar>
                        <p>{member.firstName}</p>
                      </div>
                    );
                  })}
                </div>
                <Button
                  buttonColor={
                    evaluationTeam ? ButtonColor.coral : ButtonColor.gray
                  }
                  onClick={() => {
                    setEvaluated(true);
                    handleEvaluate();
                  }}
                  disabled={!evaluationTeam}
                >
                  Запросить
                </Button>
                {evaluated && (
                  <p className="evaluation">
                    Средняя оценка вашего товара составляет {evaluation} леев
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        <Button
          buttonColor={ButtonColor.coral}
          onClick={() => handleUploadPictures()}
        >
          Загрузить фото
        </Button>
        <div className="add-trade-modal-footer">
          <Button
            buttonColor={ButtonColor.yellow}
            onClick={() => handleSetShowAddTradeModal()}
          >
            Отмена
          </Button>
          <Button
            disabled={isError}
            buttonColor={isError ? ButtonColor.gray : ButtonColor.coral}
            onClick={() => {
              handleAddTrade(tradeName.text);
              handleSetShowAddTradeModal();
            }}
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};
