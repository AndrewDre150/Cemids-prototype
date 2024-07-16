
import { useContext, useEffect } from "react";
import "./App.scss";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Chart from './components/Charts/Chart'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Calender from './components/calender/Calender'
import LandingPage from "./components/Landing/Landing-page";
import DonationForm from "./components/donation/DonationForm";
import Payment from './components/payment/Payment'
import Quiz from './components/Quiz/Quiz'
import ClimateChangeQuiz from "./components/Quizes/ClimateChange";
import PlasticsImpactsQuiz from "./components/Quizes/PlasticsImpact";
import EnvironmentalLiteracyQuiz from "./components/Quizes/EnviromentalLiteracy";
import CleanEnergyQuiz from "./components/Quizes/CleanEnergy";
// import QuizRoute from './components/Quizes/QuizRoute'
import HomeQuiz from './components/Landing/Components/HomeQuiz'
import Chatbot from './components/Chatbot/Chatbot'
import Map from './components/Landing/Components/Map'
import EventsMap from "./components/Map/EventsMap";
import Analytics from "./components/Charts/Analytics";
import { ProtectedRoute } from "./ProtectedRoute";
import ProfilePage from "./components/Profile/Profile";
import DescriptionAlerts from "./components/Alerts/Alert";
import CO2Monitor from "./components/Alerts/CO2Monitor";
import Updates from "./components/Articles/Updates";
import DashQuiz from "./components/Dashquiz/DashQuiz";
import NewBot from './components/Chatbot/NewBot'
import Report from "./components/Report/Report";
import ForgotPasswrod from "./Forgot-password/forgotPasswrod";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('userToken');
  //   if (storedToken && !user) {
  //     // If there's a token in localStorage and no user is logged in, set the user state
  //     setUser({ accessToken: storedToken });
  //   }
  // }, [user]);

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken && !user) {
      // If there's a token in localStorage and no user is logged in, set the user state
      setUser({ accessToken: storedToken });
    }
  }, []); // Empty dependency array to run this effect only once on component mount
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPasswrod />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/testpayment" element={<Testpayment />} /> */}
          <Route path="/climatequiz" element={<ClimateChangeQuiz/>} />
          <Route path="/cleanenergy" element={<CleanEnergyQuiz/>} />
          <Route path="/environment" element={<EnvironmentalLiteracyQuiz/>} />
          <Route path="/plasticsquiz" element={<PlasticsImpactsQuiz/>} />

          <Route element={<BaseLayout />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<ProtectedRoute user={user}>
              <Dashboard/>
            </ProtectedRoute>} />
            <Route path="*" element={<ProtectedRoute user={user}>
            <PageNotFound />
            </ProtectedRoute>} />
            <Route path="/charts" element={<ProtectedRoute user={user}>
              <Chart/>
            </ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute user={user}>
              <Analytics/>
            </ProtectedRoute>} />
            <Route path="/content" element={<ProtectedRoute user={user}>
              <Updates/>
            </ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute user={user}>
              <Report/>
            </ProtectedRoute>} />
            <Route path="/calender" element={<ProtectedRoute user={user}>
              <Calender/>
            </ProtectedRoute>} />
            <Route path="/donation" element={<ProtectedRoute user={user}>
              <DonationForm/>
            </ProtectedRoute>} />
            {/* <Route path="/map" element={<Map />} /> */}
            <Route path="/eventsmap" element={<ProtectedRoute user={user}>
            <EventsMap />
            </ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute user={user}>
              <DashQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/climatequiz" element={<ProtectedRoute user={user}>
              <ClimateChangeQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/cleanenergy" element={<ProtectedRoute user={user}>
              <CleanEnergyQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/environment" element={<ProtectedRoute user={user}>
              <EnvironmentalLiteracyQuiz/>
            </ProtectedRoute>} />
            <Route path="/quiz/plasticsquiz" element={<ProtectedRoute user={user}>
              <PlasticsImpactsQuiz/>
            </ProtectedRoute>} />
            <Route path="/chatbot" element={<ProtectedRoute user={user}>
              <NewBot/>
            </ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute user={user}>
              <ProfilePage/>
            </ProtectedRoute>} />
            <Route path="/alerts" element={<ProtectedRoute user={user}>
              <DescriptionAlerts/>
            </ProtectedRoute>} />
            <Route path="/alert" element={<ProtectedRoute user={user}>
              <CO2Monitor/>
            </ProtectedRoute>} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}


export default App;
