import React from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
      showModal: false,
      selectedBeast: null
    };
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    });
  };


  render() {
    return (
      <>
        
        {
          this.state.selectedBeast &&
          <SelectedBeast
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast}
          />
        }
        <Header></Header>
        <Main
          beasts={this.state.beasts}
          handleOpenModal={this.handleOpenModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;


// import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Form, FormControl, FormLabel, ListGroupItem } from 'react-bootstrap';


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       howToSort: ''
//     }
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // this.setState({
//       // name: event.target.name.value,
//       // howToSort : event.target.selected.value,
//       let newArr;
//       if (this.state.howToSort === 'even') {
//          newData = data.filter(num => num % 2 === 0)
//       } else if (this.state.howToSort === 'odd') {
//           newData = data.filter(num => num % 2 !== 0)
//       } else {
//           newData = data; // returnms all the data
//       }
//       this.setState ({
//           filteredData: newData
//       })
//     };

//   }

//   handleSelect = () => {
//     console.log(e.target.value);
//     this.setState({
//       howToSort: e.target.value
//     })
//   };
//   render() {

//     let newArrray = this.state.filteredData.map((dataItem, idx) => {
//       return <ListGroup.Item key={idx}>{dataItem}</ListGroup.Item>
//     })

//     return (
//       <>
//         <header>
//           <h1>Forms in React</h1>
//         </header>
//         <main>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Label>
//               <Form.Control type="text" name="name" onChange/>
//             </Form.Label >
//             <Form.Group>
//               <Form.Label htmlFor="filterOption">Select</Form.Label>
//                 <Form.Select id="filterOption" name="selected" onChange={this.handleSelect}>
//                   <option value="all"></option>
//                   <option value="odd"></option>
//                   <option value="even"></option>
//                 </Form.Select>

              
//             </Form.Group>
//             <Form.Button>

//             </Form.Button>
//           </Form>

//           <ListGroup>
//             {newArray}
//           </ListGroup>
//         </main>
//       </>
//     )
//   }
// }