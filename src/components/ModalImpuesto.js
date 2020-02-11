import React, { Component } from "react";

class ModalImpuesto extends Component {
  state = {
    impuestos: this.props.impuestos
  };

  handleSubmit(event) {
    console.log("Event " + event.target.value);
    event.preventDefault();
  }

  render() {
    const { impuestos } = this.state;

    return (
      <div
        className="modal fade"
        id="impuestosModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar impuestos</h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="form-usuarios" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <div className="col-sm-12 mb-12 mb-sm-0">
                    <label htmlFor="nombreImpuesto">Impuestos</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="nombreImpuesto"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 mb-12 mb-sm-0">
                    <label htmlFor="valorImpuesto">Valor</label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      id="valorImpuesto"
                    />
                  </div>
                </div>
                
                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Guardar"
                  />
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default ModalImpuesto;
