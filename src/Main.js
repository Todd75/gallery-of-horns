import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {

  render() {
    return (
      <>
      <div className='mainBeast'>
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
      </div>
      </>
    )
  }
}








export default Main;
