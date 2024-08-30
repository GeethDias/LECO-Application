import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcceptableUsePolicy from './Pages/AcceptableUsePolicy';
import PasswordPolicy from './Pages/PasswordPolicy';
import MyProfileView from './Pages/MyProfileView';
import NotFound from './Pages/NotFound';
import ReportIncident from './Pages/ReportIncident';
import ByodPolicyModule from './Pages/ByodPolicyModule'
import RemoteAccessPolicy from './Pages/RemoteAccessPolicy';
import InternetUsagePolicy from './Pages/InternetUsagePolicy';
import ResultsPage from './Pages/ResultsPage';
import AdminQuestionForm from './Pages/Admin/AdminQuesionForm';

import Dashboard from './Pages/Dashboard';
import ModuleQuiz from './Pages/ModuleQuiz';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/AcceptableUsePolicy" element={<AcceptableUsePolicy />} />
          <Route path="/PasswordModule" element={<PasswordPolicy />} />
          <Route path="/ByodPolicyModule" element={<ByodPolicyModule/>} />
          <Route path="/MyProfileView" element={<MyProfileView />} />
          <Route path='/ReportIncident' element={<ReportIncident/>} />
          <Route path='/RemoteAccessPolicy' element={<RemoteAccessPolicy/>}/>
          <Route path='/InternetUsagePolicy' element={<InternetUsagePolicy/>}/>
          <Route path="/ResultsPage" element={<ResultsPage />} />
          <Route path='/admin/AddQuestions' element={<AdminQuestionForm />} />
          <Route path="/module/:moduleId" element={<ModuleQuiz />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
