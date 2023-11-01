import { BoardTicket } from "../types/boardticket";
import { Ticket } from "../types/ticket";
import { User } from "../types/user";

export const boardTicketParser = (
  tickets: Ticket[],
  users: User[],
  groupBy: "priority" | "username" | "status"
) => {
  const boardTickets = tickets.map((ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    return {
      ...ticket,
      username: user?.name || "",
      userAvailable: user?.available || false,
    };
  });
  const groupedTickets = boardTickets.reduce((groups, ticket) => {
    const key = ticket[groupBy];

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(ticket);
    return groups;
  }, {} as Record<string, BoardTicket[]>);
  return groupedTickets;
};
