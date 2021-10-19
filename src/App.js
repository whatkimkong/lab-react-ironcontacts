import './App.css';
import React, {Component} from 'react';
import contacts from "./contacts.json"; 
import { Button, Container } from 'react-bootstrap';

/*
const tableStyle = {
  border: 'none',
  width: '40%',
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'left',
  padding: '5px',
}
*/

class App extends Component {

  state = {
    contactsDisplayed: contacts.slice(0, 5),
  }
 
  addRandomContact = () => {
    const randomIndex = Math.floor(Math.random()*contacts.length);
    const randomContact = contacts[randomIndex];
    const clonedContacts = [...this.state.contactsDisplayed];
    clonedContacts.push(randomContact)
    this.setState({contactsDisplayed: clonedContacts})
  }

  sortByName = () => {
    const clonedContacts = [...this.state.contactsDisplayed];
    clonedContacts.sort((a, b) => {
      return a.name >= b.name ? 1:-1
    });
    this.setState({contactsDisplayed: clonedContacts})
  }

  sortByPopularity = () => {
    const clonedContacts = [...this.state.contactsDisplayed];
    clonedContacts.sort((a, b) => {
      return a.popularity <= b.popularity ? 1:-1
    });
    this.setState({contactsDisplayed: clonedContacts})
  }

  render() {
  return (
    <Container className="justify-content-center">
    
        <h2 >IronContacts</h2>
        <Button onClick={this.addRandomContact}>Add a New Contact</Button>
        <Button onClick={this.sortByName}>Sort By Name</Button>
        <Button onClick={this.sortByPopularity}>Sort By Popularity</Button>
        <hr/>
        <table >
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsDisplayed.map((eachContact) => {
              return (
            <tr>
              <td key={eachContact}><img alt="contactImage" src={eachContact.pictureUrl} width="40vw"/></td>
              <td key={eachContact.name}>{eachContact.name}</td>
              <td key={eachContact.popularity}>{eachContact.popularity}</td>
            </tr>
              )
            })}
          </tbody>
        </table>
    </Container>
  )
  }
}

// ?? the picture how?
// <img src=`{eachContact.pictureUrl}`/>

export default App;

// why the fragment? // because it doesnt like double divs!!!
