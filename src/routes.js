import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/hoje"
        element={
          <ProtectedRoute>
            <Layout>
              <Hoje />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/habitos"
        element={
          <ProtectedRoute>
            <Layout>
              <Habitos />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
