import React, { Component } from 'react'

export default class NavBar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark Maincolor py-3">
                    <div className="container">
                        <a className="navbar-brand" href="#">AppStore</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item text-white cart position-relative">
                                    <span>${this.props.totalprice.toFixed(2)}</span>
                                    <span>Cart <i className="fas fa-shopping-cart"></i></span>
                                    <span className="badge badge-info p-2 numpostion">{this.props.totalnum}</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

