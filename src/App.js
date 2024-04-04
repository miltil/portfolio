import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import LandingPage from "./pages/LandingPage";
import DemographicsPage from "./pages/DemographicsPage";
import VisitReasonPage from "./pages/VisitReasonPage";
import TimeslotPickerPage from "./pages/TimeslotPickerPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import SummaryPage from "./pages/SummaryPage";
import StepIndicator from "./components/StepIndicator";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Layout>
          <StepIndicator />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/demographics" element={<DemographicsPage />} />
              <Route path="/visit-reason" element={<VisitReasonPage />} />
              <Route path="/timeslots" element={<TimeslotPickerPage />} />
              <Route path="/confirm" element={<ConfirmationPage />} />
              <Route path="/summary" element={<SummaryPage />} />
            </Routes>
          </Layout>
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
