import React, { Component } from "react";
import Rating from "./Rating";
import { Modal, ModalBody } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal >
          <image
            width={64}
            height={64}
            className="mr-3"
            src={this.props.data.imageUrl}
            alt="Portrait"
          />
          <ModalBody>
            <h5>{this.props.data.productName}</h5>
            {this.props.data.releasedDate}
            <Rating
              rating={this.props.data.rating}
              numOfReviews={this.props.data.numOfReviews}
            />
            <p>{this.props.data.description}</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Product;
