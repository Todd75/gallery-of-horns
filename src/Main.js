import React from 'react';
// import { Container } from 'react-bootstrap';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import './App.css';

class Main extends React.Component {

  render() {
    return (
      <>
        <div className='mainBeast'>
          {/* <Container>
            <Row xs={1} sm={2} med={3} large={4}> */}

              {
                this.props.beasts.map((beasts, idx) => (

                  <HornedBeast
                    handleOpenModal={() => this.props.handleOpenModal(beasts)}
                    _id={beasts._id}
                    title={beasts.title}
                    image_url={beasts.image_url}
                    horns={beasts.horns}
                    keyword={beasts.keyword}
                    description={beasts.description}
                    key={idx}
                  />
                ))
              }
            {/* </Row>
          </Container> */}
        </div>
      </>
    )
  }
}








export default Main;
