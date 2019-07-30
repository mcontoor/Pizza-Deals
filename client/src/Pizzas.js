import React, { Component } from "react";
import axios from "axios";

class Pizzas extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: []
    };
  }

  onSubmit = _id => {
    // axios
    //   .get(`http://localhost:5001/cart/${_id}`)
    //   .then(console.log(`${_id} added to cart`))
    //   .catch(e => console.log(e));
    console.log(_id);
  };

  componentDidMount() {
    axios
      .get("http://localhost:5001/")
      .then(res => {
        // console.log(res.data);
        this.setState({
          pizzas: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { pizzas } = this.state;
    return (
      <div>
        <ul>
          {pizzas.map(pizza => (
            <li key={1}>
              <span>
                {pizza.name}
                <br />
              </span>
              <span>
                {pizza.description}
                <br />
              </span>
              <span>${pizza.price}</span>
              <button onClick={this.onSubmit(pizza._id)} type="submit">
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pizzas;
