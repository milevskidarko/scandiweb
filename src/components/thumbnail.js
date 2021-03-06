import React, { Component } from "react";
import arrowLeft from "../assets/images/arrowleft.svg";

class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
        this.changeImage = this.changeImageHandler.bind(this);
    }

    changeImageHandler(index) {
        if (index < 0) {
            index = this.props.product.gallery.length - 1;
        }
        if (index > this.props.product.gallery.length - 1) {
            index = 0;
        }
        this.setState({
            index: index,
        });
    }
    render() {
        return (
            <div>
                {this.props.product.gallery.length > 2 ? <img
                    src={arrowLeft}
                    alt="arrowImg"
                    className="arrowLeft"
                    onClick={() => this.changeImage(this.state.index - 1)}
                /> : null}
                <img
                    className="cartImageInner"
                    src={this.props.product.gallery[this.state.index]}
                    alt="img"
                />
                {this.props.product.gallery.length > 2 ? <img
                    src={arrowLeft}
                    alt="arrowImg"
                    className="arrowRight"
                    onClick={() => this.changeImage(this.state.index + 1)}
                /> : null}
            </div>
        );
    }
}

export default Thumbnail;
