import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Header />
          <LoginPage />
        </Route>

        <Route path="/chat">
          <h1>Chats</h1>
        </Route>
      </Switch>





    </BrowserRouter>
  );
}

export default App;
