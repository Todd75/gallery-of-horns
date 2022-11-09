import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstap/Card';
import './HornedBeast.css';

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
        <Card>
          <Card.Body>
            <Card.Header as="h2"


            >
              {this.props.title}
            </Card.Header>
            <img

              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.title}
              onClick={this.handleLikes}
            />
            <p>{this.props.description}</p>

          </Card.Body>
        </Card>
      </>
    );
  }
}
export default HornedBeast;
