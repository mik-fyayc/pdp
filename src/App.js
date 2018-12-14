import React, { Fragment } from 'react';
import Gallery from "./Components/Gallery";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: false
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.catalog.geberit.com/v1/en-GB/products/PRO_224638"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
  }
  
  render() {
    const data = this.state.data;
    return (
    <Fragment>
      {data && <Gallery data={this.state.data.gallery.list} className="test"/>}
    </Fragment>
    );
  }
}

export default App;