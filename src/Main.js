import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray = [];
    data.forEach((beast, idx) => {
      beastArray.push(
        <HornedBeast
          id={beast._id}
          title={beast.title}
          image_url={beast.image_url}
          horns={beast.horns}
          key={idx}
          keyword={beast.keyword}
          description={beast.description}
        />
      )
    })

    return (
      <>
        <main>
          {beastArray}
        </main>
      </>
    )
  }
}








export default Main;
