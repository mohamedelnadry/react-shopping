import React, { Component } from 'react'

export default class Cart extends Component {

    render() {
        return (
            <>
                <div>
                    <div className='mt-3 pt-3'>
                        <h3 className='CartTitle'>Cart Items</h3>
                        {this.props.items.length ===0?<h5 className='text-center'>Cart is empty</h5>:''}
                        {this.props.items.map((value, index) => {
                            return (
                                <div key={value.id}>
                                    <div className='row text-center'>
                                        <div className='Cartimge col-md-4'>
                                            <img className='w-100 img-flued' src={value.image} alt="" />
                                        </div>
                                        <div className='col-md-8'>
                                            <h6 className='TitleCart'>{value.title}</h6>
                                            <span className='mb-4 cartPrice'>${value.price}</span>
                                            <div className='my-1'>
                                                <button onClick={()=>{this.props.addItem(value)}} className='btn btn-info'>+</button>
                                                <span className='px-3'>{value.total}</span>
                                                <button onClick={()=>{this.props.minusItem(value)}} className='btn btn-danger'>-</button>
                                                <button onClick={()=>{this.props.removeitem(value)}} className='btn btn-danger ml-3'><i className="fas fa-trash"></i></button>

                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>

                </div>

            </>
        )
    }
}
