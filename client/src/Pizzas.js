import React, { Component } from "react";
import axios from "axios";

class Pizzas extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/")
      .then(res => {
        console.log(res.data);
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
            <li key={pizza._id}>
              <span>
                {pizza.name}
                <br />
              </span>
              <span>
                {pizza.description}
                <br />
              </span>
              <span>${pizza.price}</span>
              <button type="submit">Add</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pizzas;
