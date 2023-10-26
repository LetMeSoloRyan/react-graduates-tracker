import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Homepage from "./homepage/homepage";
import Programs from "./scenes/programs";
import Students from "./scenes/students";
// import Studentlist from './studentlist/studentlist'
import Jobopp from "./jobopp/jobopp";
import Joboff from "./joboff/joboff";
import Firstjob from "./firstjob/firstjob";
// import Salaries from './scenes/salaries';
import { Route, Routes } from "react-router-dom";
import SignUp from "./scenes/signup";
import LoginSignup from "./scenes/login";
import Resetpassword from "./scenes/resetpassword";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/students" element={<Students />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
              <Route path="/jobOpportunities" element={<Jobopp />} />
              <Route path="/jobOffers" element={<Joboff />} />
              <Route path="/firstJob" element={<Firstjob />} />
              {/* <Route path='/salaries' element={<Salaries />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
