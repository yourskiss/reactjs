import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

import './App.css';

import Home from './Home';
import JPview3 from "./JPview3";
import JPview2 from "./JPview2";
import JPview from "./JPview";
import JPdetail from "./JPdetail";
import JPcreate from "./JPcreate";
import JPedit from "./JPedit";
import JPdelete from "./JPdelete";

function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
        <ul>
          <li><Link to="jp-view3">JP View 3</Link></li>
          <li><Link to="jp-view2">JP View 2</Link></li>
          <li><Link to="jp-view">JP View</Link></li>
          <li><Link to="jp-create">JP Create</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/jp-view2" element={<JPview2 />} />
          <Route path="/jp-view3" element={<JPview3 />} />

          <Route path="/jp-create" element={<JPcreate />} />
          <Route path="/jp-view" element={<JPview />} />
          <Route path="/jp-detail/:id" element={<JPdetail />} />
          <Route path="/jp-edit/:id" element={<JPedit />} />  
          <Route path="/jp-delete/:id" element={<JPdelete />} />  
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;     

