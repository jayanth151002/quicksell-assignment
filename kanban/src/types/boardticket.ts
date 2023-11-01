import { Ticket } from "./ticket";

export interface BoardTicket extends Ticket {
  username: string;
  userAvailable: boolean;
}
