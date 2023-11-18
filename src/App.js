import "@fontsource/fira-sans";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUsPage";
import CardBox from "./components/Dashboard/Sections/Transform/CardBox";
import { Section } from "./components/Dashboard/Sections/Register/src/screens/Section/Section";
import { SoftwareSection } from "./components/Dashboard/Sections/Software/SoftwareSection";
import { BenifitSection } from "./Layout/src/screens/Section/BenifitSection";
import styled from "styled-components";
import ResumeSection from "./Layout/src/ResumeSection/ResumeSection";
import { UpskillSection } from "./Layout/src/UpskillSection/UpskillSection";
import { FooterNew } from "./components/footer/src/screens/Footer/FooterNew";
import  Testimonials2  from "./Layout/src/Testimonials/Testimonials2";
import { ResumeSection2 } from "./Layout/src/ResumeSec2/ResumeSection";

const DashBoardMain = () => {
  return (
    <div>
      <Section />
      <CardBox />
      <SoftwareSection />
      <BenifitSection />
      <Testimonials2 />
      <ResumeSection2 />
      <UpskillSection />
    </div>
  );
};

const StyledAppDiv = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Fira Sans",
    },
  });

  return (
    <StyledAppDiv>
      
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Routes>
              <Route exact path="/" element={<DashBoardMain />} />
              <Route exact path="/about-us" element={<AboutPage />} />
              <Route exact path="/contact-us" element={<ContactUs />} />
            </Routes>
            <FooterNew />
          </div>
        </ThemeProvider>
    </StyledAppDiv>
  );
}

export default App;
