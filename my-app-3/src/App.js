import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfileView from './Pages/MyProfileView';
import NotFound from './Pages/NotFound';
import ResultsPage from './Pages/ResultsPage';
import AdminQuestionForm from './Pages/Admin/AdminQuesionForm';
import Dashboard from './Pages/Dashboard';
import ModuleQuiz from './Pages/ModuleQuiz';
import NotAuthorized from './Pages/NotAuthorized';
import Login from './Pages/LoginForm';  // Login Page
import Register from './Pages/RegistrationForm'; // Registration Page
import ProtectedRoute from './Components/ProtectedRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import MyNavbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import SelectDepartment from './Pages/SelectDepartment';
import ContactUs from './Pages/ContactUs';
import ITDepartment from './Pages/it_department_modules';
import HRDepartment from './Pages/hr_department_modules';
import FINANCEDepartment from './Pages/finance_department_modules';
import ManageUsers from './Pages/Admin/ManageUsers';
import AcceptableUsePolicy from './Pages/AcceptableUsePolicy';
import InitialQuiz from './Pages/InitialQuizSelection';
import AboutThisSystem from './Pages/AboutThisSystem';


function App() {
  const [user, setUser] = useState(null); // Initially null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      const id = localStorage.getItem('id');
      if (token && role && id) {
        setUser({ token, role, id });
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    // Check the user on page load
    checkUser();

    // Add event listener for changes in localStorage
    window.addEventListener('storage', checkUser);

    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, []);


  if (loading) {
    return <div>Loading...</div>; // Optional: display a loading spinner
  }

  return (

    <Router>
      <div>
        <MyNavbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          {/*Newly added for select departments*/}
          <Route path="/Select-Department" element={<SelectDepartment />} />
          <Route path="/Select-Department/IT-Department" element={<ITDepartment />} />
          <Route path="/Select-Department/HR-Department" element={<HRDepartment />} />
          <Route path="Select-Department/Finance-Department" element={<FINANCEDepartment />} />
          <Route path="Select-Department/Initial-Quiz-Selection" element={<InitialQuiz/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path='/AcceptableUsePolicy' element={<AcceptableUsePolicy/>} />
          <Route path='/AboutThisSystem' element={<AboutThisSystem/>} />
          <Route path="/MyProfileView" element={<MyProfileView user={user} />} />
          {/* <Route path='/ReportIssues' element={<ReportIssues />} /> */}
          <Route path="/ResultsPage" element={<ResultsPage />} />
          <Route
            path="/admin/AddQuestions"
            element={
              <ProtectedRoute user={user} requiredRole="AdminUser">
                <AdminQuestionForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manage-users"
            element={
              <ProtectedRoute user={user} requiredRole="AdminUser">
                <ManageUsers />
              </ProtectedRoute>
            }
          />

          <Route path="/module/:moduleId" element={<ModuleQuiz />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute user={user} requiredRole="AdminUser"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
