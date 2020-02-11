import React, { Component } from "react";

class TablaLinea extends Component {
  state = {
    lineas: this.props.lineas
  };

  componentDidMount() {}

  render() {
    const { lineas } = this.state;

    if (lineas.length === 0) return <div></div>;

    return (
      <table className="table table-bordered" id="dataTable" cellSpacing="0">
        <thead>
          <tr>
            <th>Linea</th>
            <th>Descripcion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lineas.map(linea => (
            <tr key={linea.id}>
              <td>{linea.linea1}</td>
              <td>{linea.descripcion}</td>
            <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TablaLinea;
