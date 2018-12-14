import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import BigImage from "./BigImage";
import SmaillImage from "./SmallImage";
import pdpStore from "../stores/pdp-store";

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
                <h1>this.state</h1>
                <BigImage images={this.state.bigImages} />
                <SmaillImage images={this.state.smallimages} passedFunc={this.clickImg}/>
            </React.Fragment>
        );
    }

}

export default observer(Gallery);