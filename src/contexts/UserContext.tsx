import React from "react";
import { createContext } from "react";
import { User } from "../types";

export type UserContextType = {
  user: User;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserContextProvider: React.FC = ({ children }) => {
  // GET user from the API or something
  return (
    <UserContext.Provider value={undefined}>{children}</UserContext.Provider>
  );
};
