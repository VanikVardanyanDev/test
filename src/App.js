import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Aside } from "./components/aside/Aside";
import { SideMenu } from "./components/sideMenu/SideMenu";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import Box from "@mui/material/Box";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import request from "./config/request";

function App() {
  const [delContact, setDelContact] = useState();
  const [isEdit1, setIsEdit1] = useState(false);
  const [open, setOpen] = useState(false);
  const [companyData, setCompanyData] = useState({});
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const company = request("/companies/12", "GET", {});
    company.then((res) => {
      setCompanyData(res.data);
    });
  }, []);

  const handleDelete = (delContact) => {
    request(`/companies/${delContact}`, "DELETE", {});
    setCompanyData("");
    setVisible(false);
    setOpen(false);
  };

  return (
    <>
      <div className="App">
        <SideMenu />
        <Aside />
        <Box sx={{ width: "100%", ml: "278px" }}>
          <Header delContact={delContact} handleDelete={handleDelete} setOpen={setOpen} open={open} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  setDelContact={setDelContact}
                  companyData={companyData}
                  setCompanyData={setCompanyData}
                  isEdit1={isEdit1}
                  setIsEdit1={setIsEdit1}
                  visible={visible}
                />
              }
            />
          </Routes>
          <Footer />
        </Box>
      </div>
    </>
  );
}

export default App;
