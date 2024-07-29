import React from "react";
import Header from "./Header";
import { useAuth } from "../contexts/AuthContext";

const Layout = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return null; // Ou exibir um loading spinner
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
