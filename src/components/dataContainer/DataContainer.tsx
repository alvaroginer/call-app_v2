import { DataGraph } from "./DataGraph";
import { CallData } from "../callCard/CallCard";
import { UpdateUserProps } from "../../functions/updateUser";

export const DataContainer = ({
  isDefault,
  call,
  userProps,
}: {
  isDefault: boolean;
  call: CallData;
  userProps: UpdateUserProps;
}) => {
  return (
    <div className="call-card--main display--flex space--between">
      <div className="main--data-container">
        <DataGraph
          isDefault={isDefault}
          userProps={{
            ...userProps,
            propToChange: { customerInterest: call.customerInterest },
          }}
          title={"Interest"}
        />
        <DataGraph
          isDefault={isDefault}
          userProps={{
            ...userProps,
            propToChange: { objectionsRaised: call.objectionsRaised },
          }}
          title={"Objections"}
        />
        <DataGraph
          isDefault={isDefault}
          userProps={{
            ...userProps,
            propToChange: { conversionPotential: call.conversionPotential },
          }}
          title={"Potential"}
        />
        {isDefault && (
          <DataGraph
            isDefault={isDefault}
            userProps={{
              ...userProps,
              propToChange: { callClosure: call.callClosure },
            }}
            title={"Clousure"}
          />
        )}
      </div>
      {isDefault ? (
        <div className="text-align-center display--flex align-itmes__center">
          <div className="main--call-rating">
            <p className="call-rating--title">Call rate</p>
            <p className="call-rating--number">{call.callRating}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="main--data-container">
            <DataGraph
              isDefault={isDefault}
              userProps={{
                ...userProps,
                propToChange: { callClosure: call.callClosure },
              }}
              title={"Clousure"}
            />
            <DataGraph
              isDefault={isDefault}
              userProps={{
                ...userProps,
                propToChange: { callDuration: call.callDuration },
              }}
              title={"Duration"}
            />
            <DataGraph
              isDefault={isDefault}
              userProps={{
                ...userProps,
                propToChange: { technicalQuality: call.technicalQuality },
              }}
              title={"Technical Quality"}
            />
          </div>
          <div className="text-align-center display--flex align-itmes__center">
            <div className="main--call-rating">
              <p className="call-rating--title">Call rate</p>
              <p className="call-rating--number">{call.callRating}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
