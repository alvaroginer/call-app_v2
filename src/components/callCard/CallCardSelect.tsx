//import { useEffect } from "react";

export const CallCardSelect = ({
  setDefault,
  setSelect,
}: {
  setDefault: (value: boolean) => void;
  setSelect: (value: boolean) => void;
}) => {
  const handleButtonClicks = () => {
    setDefault(false);
    setSelect(false);
  };

  // const handleClick = () => {
  //   setSelect(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClick);

  //   return () => {
  //     window.removeEventListener("click", handleClick);
  //   };
  // });

  return (
    <div className="call-card--select">
      <div
        onClick={handleButtonClicks}
        className="display--flex gap--5 align-itmes__center call-card--select__button call-card--button__edit"
      >
        <img
          className="call-card--button__img"
          src="/imgs/pencil.png"
          alt="Edit button"
        />
        <p>Edit Call</p>
      </div>
      <div className=" display--flex gap--5 align-itmes__center call-card--select__button call-card--button__delete">
        <img
          className="call-card--button__img"
          src="/imgs/delete.png"
          alt="Delete button"
        />
        <p>Delete Call</p>
      </div>
    </div>
  );
};
