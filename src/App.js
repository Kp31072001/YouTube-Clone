
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Search from './Search';

function App() {
  return (
    <div className="app">
      
     
        
        <Router>
          <Header />
          
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app_page">
                <Sidebar />
                <Search />
              </div>
            </Route>
            <Route path="/">
              <div className="app_page">
                <Sidebar />
                <RecommendedVideos />
              </div>
              
            </Route>
          </Switch>
        </Router>
        
      </div>

  );
}

export default App;
