import React,{useState} from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AddUser from "./components/users/AddUser";

function App(props) {
  const [documents, setDocuments] = useState([])
  const addDocument = document => {

    document.id = documents.length +1

    setDocuments([...documents, document])

  }
  const deletebtn= (i)=>{
      const newItems = [...documents]
      newItems.splice(i, 1)
      setDocuments(newItems)
    }

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={()=><Home documents={documents} deletebtn={deletebtn}/>} />
          <Route exact path="/users/add" component={()=><AddUser addDocument={addDocument}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
