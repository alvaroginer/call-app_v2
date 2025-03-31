import { useState } from "react";
import { DataContainer } from "../dataContainer/DataContainer";
import { CallCardSelect } from "./CallCardSelect";
import { UpdateUserProps } from "../../functions/updateUser";

export interface CallData {
  number: number;
  customerInterest: number;
  objectionsRaised: number;
  conversionPotential: number;
  callClosure: number;
  callDuration: number;
  technicalQuality: number;
  callRating: number;
}

export const CallCard = ({
  call,
  userProps,
}: {
  call: CallData;
  userProps: UpdateUserProps;
}) => {
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleClick = () => {
    setShowSelect(!showSelect);
  };

  return (
    <div className="call-card">
      <div className="call-card--header">
        <p className="call--title">Llamada {call.number}</p>
        <div className="call--header__data-container">
          <div className="title-container">
            <p className="title-container--text__orange">Fecha</p>
            <p className="title-container--text__grey">12/11/25</p>
          </div>
          <div className="title-container">
            <p className="title-container--text__orange">Duración</p>
            <p className="title-container--text__grey">00:12:24</p>
          </div>
          <div className="position-relative">
            <button
              onClick={handleClick}
              className="sub-section--header__button"
            >
              <img src="/imgs/dots-vertical.png" alt="Edit Menu" />
            </button>
            {showSelect && <CallCardSelect setDefault={setIsDefault} />}
          </div>
        </div>
      </div>
      <hr />
      <DataContainer isDefault={isDefault} call={call} userProps={userProps} />
    </div>
  );
};
