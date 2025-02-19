import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";
import StartPage from "@/pages/StartPage";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/start" element={<StartPage />} />
      </Routes>
    </Box>
  );
}

export default App;
