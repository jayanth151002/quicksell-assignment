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
    <div className="grid-parent">
      {Object.keys(groupedTickets).map((key) => (
        <div key={key} className="column-main">
          <div className="column-name">{key}</div>
          {groupedTickets[key].map((ticket) => (
            <span key={ticket.id}>
              <Card
                id={ticket.id}
                avatar={ticket.username[0]}
                title={ticket.title}
                tag={ticket.tag[0]}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Board;
