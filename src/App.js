import React from "react";
import { render } from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import AButton from "./AButton";
import AProduct from "./AProduct";
import Timer from "./Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.state = {
      products: [
        {
          id: 1,
          count: 5,
          name: "Orange",
          price: 10
        },
        {
          id: 2,
          count: 1,
          name: "Apple",
          price: 0
        },
        {
          id: 3,
          count: 4,
          name: "Carrot",
          price: 5
        }
      ],
      columns: [
        {
          dataField: "count",
          text: "Count"
        },
        {
          dataField: "name",
          text: "Product Name"
        },
        {
          dataField: "price",
          text: "Product Price",
          sort: true
        }
      ]
    };
  }

  handleCountChange() {
    let updateValue = [];

    this.state.products.map(elem => {
      elem.count = Math.floor(Math.random() * 8 + 1);
      elem.price = Math.floor(Math.random() * 20 + 1);
      updateValue.push(elem);
      /*eslint-disable-next-line*/
      console.log("new count: ", elem.count);
      /*eslint-disable-next-line*/
      console.log("new price: ", elem.price);
    });

    this.setState({ products: updateValue });
  }
  componentDidMount() {
    this.setState({ products: this.state.products });
  }

  render() {
    let data = this.state.products;
    let counts = 0;
    let prices = 0;
    let average = Object.keys(this.state.products).length;
    this.state.products.map(product => {
      counts = counts + product.count;
      prices = prices + product.price;
    });

    return (
      <div>
        <div className="container" style={{ marginTop: 70 }}>
          <BootstrapTable data={data} striped={true} hover={true}>
            <TableHeaderColumn
              dataField="count"
              isKey={true}
              dataAlign="center"
              dataSort={true}
            >
              Count
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>
              Product Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="price">
              Product Price
            </TableHeaderColumn>
          </BootstrapTable>
          <AProduct count={counts} price={(prices / average).toFixed(2)} />
          <AButton onClick={this.handleCountChange} name="Calculate" />
          <Timer />
        </div>

        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
