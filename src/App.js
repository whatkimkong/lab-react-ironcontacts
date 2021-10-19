import './App.css';
import React, {Component, Fragment} from 'react';
import contacts from "./contacts.json"; 
import { Button, Container } from 'react-bootstrap';

const tableStyle = {
  border: 'none',
  width: '40%',
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'left',
  padding: '5px',
}

class App extends Component {

  state = {
    first5Contacts: contacts.slice(0, 5),
  }
 

  render() {
  return (
    <Container className="justify-content-center">
        <h2 >IronContacts</h2>
        <table >
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
              <td><img alt="contactImage" src={eachContact.pictureUrl} width="40vw"/></td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity}</td>
            </tr>
              )
            })}
          </tbody>
        </table>
        <Button>Add a New Contact</Button>
      </Container>
  )
  }
}

// ?? the picture how?
// <img src=`{eachContact.pictureUrl}`/>

export default App;

// why the fragment? // because it doesnt like double divs!!!
