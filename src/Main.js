import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {

  render() {
    return (
      <>
        {
          data.map((beast) => (

            <HornedBeast
              _id={beast._id}
              title={beast.title}
              image_url={beast.image_url}
              horns={beast.horns}
              keyword={beast.keyword}
              description={beast.description}
            />
          ))
        }

      </>
    )
  }
}








export default Main;
