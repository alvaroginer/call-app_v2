import { useState } from "react";
import { UpdateUserProps } from "../../functions/updateUser";
import { updateUser } from "../../functions/updateUser";
import { UserData } from "../userCard/UserCard";

interface GraphProps {
  isDefault: boolean;
  userProps: UpdateUserProps;
  title: string;
}

export const DataGraph = ({ isDefault, userProps, title }: GraphProps) => {
  const { callIndex, id, propToChange } = userProps;

  const categoryKey = Object.keys(propToChange)[0];
  let categoryValue: number | undefined;

  if (typeof propToChange === "object" && propToChange !== null) {
    if ("id" in propToChange) {
      // Si tiene 'id', es un UserData
      categoryValue = (propToChange as UserData)[
        categoryKey as keyof UserData
      ] as number | undefined;
    } else {
      // Si no tiene 'id', es un Record<string, number>
      categoryValue = (propToChange as Record<string, number>)[categoryKey];
    }
  }

  const [handleValue, setHandleValue] = useState<number>(categoryValue ?? 0);

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
                    updateUser({
                      id: id,
                      propToChange: { categoryKey: handleValue },
                      callIndex: callIndex,
                    });
                  }}
                ></input>
              );
            } else {
              return (
                <input
                  key={index}
                  type="checkbox"
                  className="step-checkbox"
                  onClick={() => {
                    setHandleValue(index + 1);
                    updateUser({
                      id: id,
                      propToChange: { categoryKey: handleValue },
                      callIndex: callIndex,
                    });
                  }}
                ></input>
              );
            }
          })}
    </div>
  );
};
