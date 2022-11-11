import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     requestedHorns: 0,
  //     newData: this.props.beasts,
  //   }
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let updates = this.props.data.filter(beast => {
  //     return beast.horns === this.state.requestedHorns;
  //   })
  //   this.setState({
  //     newData: updates
  //   });
  // }

  // handleChanges = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     requestedHorns: parseInt(event.target.value),
  //   })
  // }
  render() {

    let beastArray = this.props.beasts.map(beasts => {
      return <HornedBeast
        handleOpenModal={() => this.props.handleOpenModal(beasts)}
        _id={beasts._id}
        title={beasts.title}
        image_url={beasts.image_url}
        horns={beasts.horns}
        keyword={beasts.keyword}
        description={beasts.description}
        key={beasts._id}
      />
    });

    let numberHornsArray = [];

    // let hornsOptions = this.props.data.filter(value => {
    //   if (!numberHornsArray.includes(value.horns)) {
    //     numberHornsArray.push(value.horns);
    //     return <option key={value.horns}>{value.horns}</option>;
    //   }
    // });

    return (
      <>
        <main>
          <Form id="form">
            <fieldset>
              <Form.Group className="beastHorn">
                <Form.Label htmlFor="Select">Search By How Many Horns</Form.Label>
                <Form.Select id="Select" onChange={this.props.filter}>
                  <option>Number of Horns</option>
                  <option value={1}>1 Horn</option>
                  <option value={2}>2 Horns</option>
                  <option value={3}>3 Horns</option>
                  <option value={100}>100 Horns</option>
                
                </Form.Select>
              </Form.Group>
              
            </fieldset>
          </Form>
          <article>
            {beastArray}
          </article>
        </main>
      </>
    )
  }
}
export default Main;


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







