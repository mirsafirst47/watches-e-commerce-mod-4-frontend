import React, { Component } from 'react';
import SingleOrder from './SingleOrder'

class PastOrder extends Component{
    
    render(){
        let arrayOfComps = this.props.past_orders.map(past_order => {
            console.log(past_order)
            return <SingleOrder key={past_order.id} past_order={past_order}  />
        })

        return (
        <div className="custom">
            <h2>Previous Orders</h2>
            <br></br>
            <div id="ordersDiv">
                {arrayOfComps}
            </div>
        </div>
        )
    }
}

export default PastOrder;