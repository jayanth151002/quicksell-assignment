import { Ticket } from "./ticket";

export type BoardTicket = Omit<Ticket, "priority"> & {
  priority: string;
  username: string;
  userAvailable: boolean;
};
