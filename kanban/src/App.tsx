import { useEffect, useState } from "react";
import "./App.css";
import { callApi } from "./api";
import { Ticket } from "./types/ticket";
import { User } from "./types/user";
import Dropdown from "./components/Dropdown";
import Board from "./components/Board";
import { groupByEnum } from "./constants/groupBy";
import { sortByEnum } from "./constants/sortBy";
import Topbar from "./components/Topbar";

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [groupBy, setGroupBy] = useState<groupByEnum>(
    (localStorage.getItem("groupBy") ?? groupByEnum.priority) as groupByEnum
  );
  const [sortBy, setSortBy] = useState<sortByEnum>(
    (localStorage.getItem("sortBy") ?? sortByEnum.none) as sortByEnum
  );

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
      <Topbar />
      <Dropdown
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Board
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
};

export default App;
