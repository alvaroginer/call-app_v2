export const CallCardSelect = ({
  setDefault,
}: {
  setDefault: (value: boolean) => void;
}) => {
  return (
    <div className="call-card--select">
      <div
        onClick={() => setDefault(false)}
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
