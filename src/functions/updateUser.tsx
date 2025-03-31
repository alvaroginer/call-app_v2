import { UserData } from "../components/userCard/UserCard";

export interface UpdateUserProps {
  id: number;
  propToChange: Record<string, number> | UserData;
  callIndex?: number;
}

export const updateUser = (props: UpdateUserProps) => {
  const { id, propToChange, callIndex } = props;

  const userDataLocalStorage = JSON.parse(localStorage.getItem("users"));
  const index = userDataLocalStorage.findIndex(
    (user: UserData) => user.id === id
  );
  //console.log("prop to change", propToChange);

  //Actualizamos el user entero
  if (callIndex === undefined) {
    userDataLocalStorage[index] = {
      ...userDataLocalStorage[index],
      ...propToChange,
    };
    //console.log("updated entire user", userDataLocalStorage[index]);
    const usersToStr = JSON.stringify(userDataLocalStorage);
    localStorage.setItem("users", usersToStr);
    //console.log("esto es users en local", JSON.parse(localStorage.getItem("users")));
    return userDataLocalStorage[index];
  }

  //Actualizamos las llamadas de un User
  if (index !== -1) {
    userDataLocalStorage[index].calls[callIndex] = {
      ...userDataLocalStorage[index].calls[callIndex],
      ...propToChange,
    };
    console.log("call updated", userDataLocalStorage[index].calls[callIndex]);
    const usersToStr = JSON.stringify(userDataLocalStorage);
    localStorage.setItem("users", usersToStr);
    return userDataLocalStorage[index];
  }
};
