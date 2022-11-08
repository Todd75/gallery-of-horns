import React from 'react';
import HornedBeast from './HornedBeast.js';
import './App.css';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <HornedBeast
            title="Elk in Velvet Horns at Rocky Mountain National Park"
            imageUrl ="./src/images/elk.jpg"
            description="Image of Elk in Velvet Horns at Rocky Mountain National Park"
          >
          </HornedBeast>
          <HornedBeast
            title="American Bison at Yellowstone National Park"
            imageUrl="./src/bison.jpg"
            description="Image of American Bison at Yellowstone National Park"
          >
          </HornedBeast>
        </main>
      </>
    )
  }
}
export default Main;
