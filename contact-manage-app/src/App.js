import "./app.css";
import { useEffect, useState } from "react";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="text-center fs-2 text-uppercase fw-bold">
          This is the app to manage customer
        </p>
        <div className="input-search-content container">
           <label for="exampleDataList" className="form-label fw-bold">Filter the customer by way input on the box below:</label>
            <input className="search form-control"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
        </div>
      </header>

      <main className="container">
        <div className="list-search-content">
          {<Table data={search(Users)} />}
        </div>
      </main>

      <footer>
        <div className="d-block pt-5 pb-5 text-center">
          © 2023 Li &amp; Fung Limited. Incorporated in Bermuda with limited liability. All rights reserved.
        </div>
       </footer>
    </div>
  );
}

export default App;
