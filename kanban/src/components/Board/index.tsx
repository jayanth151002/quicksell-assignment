import { BoardTicket } from "../../types/boardticket";
import { Ticket } from "../../types/ticket";
import { User } from "../../types/user";
import { boardTicketParser } from "../../utils/boardTicketParser";
import Card from "../Card";
import "./styles.css";

interface BoardProps {
  tickets: Ticket[];
  users: User[];
  groupBy: "priority" | "username" | "status";
}

const Board = ({ tickets, users, groupBy }: BoardProps) => {
  const groupedTickets = boardTicketParser(tickets, users, groupBy);

  return (
    <div>
      {Object.keys(groupedTickets).map((key) => (
        <div key={key}>
          <h2>{key}</h2>
          <ul>
            {groupedTickets[key].map((ticket) => (
              <span key={ticket.id}>
                <Card />
              </span>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Board;
