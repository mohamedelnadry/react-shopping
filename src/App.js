import './App.css';
import Cart from './Components/Cart';
import Products from './Components/products';
import { Component } from 'react';
import Navbar from './Components/Navbar';


export default class App extends Component {
  state = { Cartitem: [] };

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('data'))
    if(data != null){
      this.setState({Cartitem:data})
    }
  }

  saveToLocalstorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data))
  }
  addITEM = (myitem) => {
    let exist = this.state.Cartitem.find((e) => e.id === myitem.id)
    if (exist) {
      let cart = this.state.Cartitem.map((e) => e.id === myitem.id ? { ...exist, total: exist.total + 1 } : e)
      this.setState({ Cartitem: cart })
      this.saveToLocalstorage(cart)

    } else {
      let ITEM = [...this.state.Cartitem, { ...myitem, total: 1 }]
      this.setState({ Cartitem: ITEM })
      this.saveToLocalstorage(ITEM)
    }

  }
  minusItem = (item) => {
    let exist = this.state.Cartitem.find((e) => e.id === item.id)

    if (exist.total > 1) {
      let cart = this.state.Cartitem.map((e) => e.id === item.id ? { ...exist, total: exist.total - 1 } : e)
      this.setState({ Cartitem: cart })
      this.saveToLocalstorage(cart)
    }

  }
  removeitem = (item) => {
    let cart = this.state.Cartitem.filter((e) => e.id !== item.id)
    this.setState({ Cartitem: cart })
    this.saveToLocalstorage(cart)
  }
  render() {
    let totalnum = this.state.Cartitem.reduce((x, y) => x + y.total, 0)
    let totalprice = this.state.Cartitem.reduce((x, y) => x + y.total * y.price, 0)
    return (
      <>
        <Navbar totalprice={totalprice} totalnum={totalnum} />
        <div className='container-flued'>
          <div className='row'>
            <div className='col-md-9'>
              <Products addItem={this.addITEM} />
            </div>
            <div className='col-md-3'>
              <Cart removeitem={this.removeitem} minusItem={this.minusItem} addItem={this.addITEM} items={this.state.Cartitem} />
            </div>
          </div>
        </div>


      </>
    )
  }
}
