import React from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      clicks: 0
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <>
        
        <h2>{this.props.title}</h2>
        {<p onClick={this.handleLikes}></p>}
        {<p>{this.state.likes} likes.</p>}
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </>
    );
  }
}
export default HornedBeast;
