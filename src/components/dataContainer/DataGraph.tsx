import { useState } from "react";
import { UpdateUserProps } from "../../functions/updateUser";

interface GraphProps {
  isDefault: boolean;
  userProps: UpdateUserProps;
  title: string;
}

export const DataGraph = ({ isDefault, userProps, title }: GraphProps) => {
  const { callIndex, id, propToChange } = userProps;
  const categoryKey = Object.keys(propToChange)[0];
  const categoryValue = propToChange[categoryKey];

  const [handleValue, setHandleValue] = useState(categoryValue);

  return (
    <div className="data-box">
      <p className="data-box--title">{title}</p>
      {isDefault
        ? Array.from({ length: 5 }).map((_, index) => {
            if (index < handleValue) {
              return (
                <input
                  key={index}
                  type="checkbox"
                  className="step-checkbox step-checkbox--default"
                ></input>
              );
            } else {
              return (
                <input
                  key={index}
                  type="checkbox"
                  className="step-checkbox"
                ></input>
              );
            }
          })
        : Array.from({ length: 5 }).map((_, index) => {
            if (index < handleValue) {
              return (
                <input
                  key={index}
                  type="checkbox"
                  className="step-checkbox step-checkbox--edit"
                  onClick={() => {
                    setHandleValue(index + 1);
                  }}
                ></input>
              );
            } else {
              return (
                <input
                  key={index}
                  type="checkbox"
                  className="step-checkbox"
                  onClick={() => setHandleValue(index + 1)}
                ></input>
              );
            }
          })}
    </div>
  );
};
