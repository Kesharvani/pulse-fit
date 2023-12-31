import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ExerciseTracking from "./pages/exercise/ExerciseTracking";
import FoodTracking from "./pages/food/FoodTracking";
import GoalTracking from "./pages/goal/GoalTracking";
import SideBar from "./common/sidebar/SideBar";
import Footer from "./common/footer/Footer";
const App = () => {
  return (
    <>
      <div className="screen_container">
        <SideBar></SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercise" element={<ExerciseTracking />} />
          <Route path="/food" element={<FoodTracking />} />
          <Route path="/goal" element={<GoalTracking />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
