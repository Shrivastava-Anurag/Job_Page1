import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import JobPreviewDashboard from './pages/JobPreviewDashboard';

function App() {
  return (
    <div className="App">
    <Header />
    <SubHeader />
    <JobPreviewDashboard />
    </div>
  );
}

export default App;
