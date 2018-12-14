import React from 'react';
import BigImage from "./BigImage";
import SmaillImage from "./SmallImage";

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            bigImages: [],
            smallimages: []
        };
    }

    componentDidMount() {
        let imgB = this.props.data
        this.setState({bigImages: imgB[0].large, smallimages: imgB});
    }

    clickImg = (e) => {
        this.setState({bigImages: e.target.dataset.largesrc});
    }

    render() {
        return (
            <React.Fragment>
                <BigImage images={this.state.bigImages} />
                <SmaillImage images={this.state.smallimages} passedFunc={this.clickImg}/>
            </React.Fragment>
        );
    }

}

export default Gallery;