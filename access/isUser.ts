import { Access } from "payload/types";
import { User } from "../types";

export const isUser: Access<any, User> = ({ req: { user } }) => {
    return (
      Boolean(user?.roles?.includes('admin')) ||
      Boolean(user?.roles?.includes('member'))
    )
}