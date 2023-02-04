import "./App.css";
import MainContent from "./components/MainContent";
import axios from "axios";

import React from "react";

function Header() {
  return (
    <header>
      <img src="Fill 213.svg" alt="ss" id="as" />
    </header>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      load: false,
    };
  }
  componentDidMount() {
    this.refresh();
  }
  refresh = () => {
    const request = axios.get("https://www.the-arabian.com/main/country/");
    console.log(request);
    request.then((result) => {
      this.setState({ todolist: result.data.results, load: true });
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.todolist.length > 0 ? (
          <>
            <Header />
            <MainContent co={this.state.todolist} />
          </>
        ) : null}
      </div>
    );
  }
}

export default App;
