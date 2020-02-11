import React, { Component } from 'react'

class TablaImpuesto extends Component {
  state = {
    impuestos: this.props.impuestos
  }

  componentDidMount() { }

  render() {
    const { impuestos } = this.state

    if (impuestos.length === 0) return <div></div>

    return (
      <table className='table table-bordered' id='dataTable' cellSpacing='0'>
        <thead>
          <tr>
            <th>Impuesto</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {impuestos.map(impuesto => (
            <tr key={impuesto.id}>
              <td>{impuesto.impuesto1}</td>
              <td>{impuesto.valor}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TablaImpuesto;
