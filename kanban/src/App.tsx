import { useEffect, useState } from "react";
import "./App.css";
import { callApi } from "./api";
import { Ticket } from "./types/ticket";
import { User } from "./types/user";
import Dropdown from "./components/Dropdown";
import Board from "./components/Board";
import { groupByEnum } from "./constants/groupBy";

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [groupBy, setGroupBy] = useState<groupByEnum>(groupByEnum.priority);

  useEffect(() => {
    callApi()
      .then((res) => {
        if (res.success) {
          setTickets(res.data.tickets);
          setUsers(res.data.users);
        } else throw new Error("Error in fetching data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Kanban</h1>
      <Dropdown setGroupBy={setGroupBy} />
      <Board tickets={tickets} users={users} groupBy={groupBy} />
    </div>
  );
};

export default App;
