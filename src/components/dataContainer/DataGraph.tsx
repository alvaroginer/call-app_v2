import { useState } from "react";

interface GraphProps {
  isDefault: boolean;
  value: number;
  title: string;
}

export const DataGraph = ({ isDefault, value, title }: GraphProps) => {
  const [handleValue, setHandleValue] = useState(value);

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
                  onClick={() => setHandleValue(index + 1)}
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
