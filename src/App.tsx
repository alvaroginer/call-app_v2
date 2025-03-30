import { useState, useEffect } from "react";
import { UserCard } from "./components/userCard/UserCard";
import { calculateGeneralRating } from "./functions/calculateRaing";
import { updateUser } from "./functions/updateUser";
import { UserData } from "./components/userCard/UserCard";
import "./App.css";
import "./index.css";

function App() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Error al cargar el JSON");
        }
        const data = await response.json();
        setUsers(data.persons);
        localStorage.setItem("users", JSON.stringify(data.persons));
      } catch (error) {
        console.error("Hubo un problema con la carga del JSON:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="grid padding--lateral__24 users-grid">
        {users.map((user: UserData) => {
          const newUser = calculateGeneralRating(user);
          updateUser({ id: user.id, propToChange: newUser });
          return <UserCard key={user.id} user={newUser} />;
        })}
      </section>
    </>
  );
}

export default App;
