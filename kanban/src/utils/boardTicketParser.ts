import { Priority } from "../constants/priority";
import { BoardTicket } from "../types/boardticket";
import { Ticket } from "../types/ticket";
import { User } from "../types/user";

export const boardTicketParser = (
  tickets: Ticket[],
  users: User[],
  groupBy: "priority" | "username" | "status",
  sortBy: "priority" | "title" | ""
) => {
  const boardTickets = tickets.map((ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    return {
      ...ticket,
      priority: Priority[ticket.priority.toString() as keyof typeof Priority],
      username: user?.name || "",
      userAvailable: user?.available || false,
    };
  });
  boardTickets.sort((a, b) => {
    if (sortBy === "priority") {
      const priorityA = a.priority;
      const priorityB = b.priority;
      return priorityB.localeCompare(priorityA);
    } else if (sortBy === "title") {
      const titleA = a.title;
      const titleB = b.title;
      return titleA.localeCompare(titleB);
    }
    return 0;
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
