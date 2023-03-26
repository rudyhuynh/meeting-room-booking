import "materialize-css/dist/css/materialize.css";
import "./App.css";

const data = [
  {
    id: 1,
    eventTitle: "MDN Project",
    roomNo: "404",
    checkIn: new Date(2023, 3, 1, 9, 0, 0),
    checkOut: new Date(2023, 3, 1, 9, 15, 0),
  },
  {
    id: 1,
    eventTitle: "React Workshop",
    roomNo: "500",
    checkIn: new Date(2023, 3, 1, 9, 0, 0),
    checkOut: new Date(2023, 3, 1, 9, 15, 0),
  },
];

function App() {
  return (
    <div className="App container">
      <h3>Meeting Booking Management</h3>

      <div className="row">
        <div className="input-field col s10">
          <i className="material-icons prefix">search</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label>Search</label>
        </div>
        <div className="control-right col s2">
          <button>Settings</button> <button>Add</button>
        </div>
      </div>

      <div>
        <table className="striped">
          <thead>
            <th>ID</th>
            <th>Event title</th>
            <th>Room No.</th>
            <th>Check in</th>
            <th>Check out</th>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.eventTitle}</td>
                  <td>{item.roomNo}</td>
                  <td>{item.checkIn.toLocaleTimeString()}</td>
                  <td>{item.checkOut.toLocaleTimeString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
