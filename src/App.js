import './App.css';
import contacts from "./contacts.json";

const tableStyle = {
  border: 'none',
  width: '40%',
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'left',
  padding: '5px',
}

function App() {

  state = {
    first5Contacts: contacts.splice(0, 4),
  }

  return (
    <><div className="App">
      <header className="App-header">
        <h2>IronContacts</h2>
      </header>
    </div><div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.first5Contacts.map((eachContact) => {
              return (
            <tr>
              <td>{eachContact.name}</td>
              <td></td>
              <td>{eachContact.popularity}</td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div></>
  );
}

// ?? the picture how?
// <img src=`{eachContact.pictureUrl}`/>


// why the fragment?

export default App;
