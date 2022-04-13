import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { Component } from 'react'
import Header from "../../components/Header"

class SupplierAddress extends Component {

  constructor(props) {
    super(props)
    this.state ={
      flatNo : '',
      societyName: '',
      area: '',
      city: '',
      pinCode: '',
      state: '',
      message: ''
  }
    
}



componentDidMount() {
    const supplierId = this.props.match.params.id
  ApiCustomerService.getUserAddress(supplierId)
    .then(res => {
      let address = res.data.result;
      address !== null && this.setState({
        area: address.area,
        city: address.city,
        pinCode: address.pinCode,
        state: address.state,
        })
  });
}

  render(){
    return (
      <div>
        <Navigation/>
        <div className="main">
      <Header title="Delivery Address" />
      <br/>
      <div className="form">

       <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Area</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="area" value={this.state.area} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">City</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="city" value={this.state.city} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Pincode</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="pinCode" value={this.state.pinCode} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">State</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="state" value={this.state.state} readOnly/>
          </div>
       </div>
        <div className="mb-3">
          <Link to="/showsupplier" className="btn float-end" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} >
            Supplier List
          </Link>
          <br></br>

        </div>
      </div>
    </div>
      </div>
  )
  }
    
}
export default SupplierAddress