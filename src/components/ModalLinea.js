import React, { Component } from "react";

class ModalLinea extends Component {
    state = {
        lineas: this.props.lineas
    };

    handleSubmit(event) {
        console.log("Event " + event.target.value);
        event.preventDefault();
    }

    render() {
        // const { lineas } = this.state;

        return (
            <div
                className="modal fade"
                id="lineasModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Agregar linea</h5>
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
                                        <label htmlFor="nombreLinea">Linea</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            id="nombreLinea"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-12 mb-sm-0">
                                        <label htmlFor="descripcionLinea">Descripción</label>
                                        <textarea
                                            required
                                            type="text"
                                            className="form-control"
                                            id="descripcionLinea"
                                        ></textarea>
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

export default ModalLinea;
