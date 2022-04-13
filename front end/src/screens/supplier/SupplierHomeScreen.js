import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import React, { Component } from 'react'

class SupplierHomeScreen extends Component {
    constructor(props) {
        super(props)
        
        this.showProfile = this.showProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.productDetails = this.productDetails.bind(this);
        this.logout = this.logout.bind(this);
    }

    showProfile(){
        this.props.history.push('/myaccount/profile');
    }

    editProfile(){
        this.props.history.push('/myaccount/editprofile');
    }

    changePassword(){
        this.props.history.push('/myaccount/change-password');
    }

    changeAddress(){
        this.props.history.push('/myaccount/changeaddress');
    }

    addProduct(){
        this.props.history.push('/addproduct');
    }

    productDetails(){
        this.props.history.push('/supplier/showproducts');
    }

    logout(){
        this.props.history.push('/logout');
    }
   render(){
    return (
        <div>
            <Navigation/>
            <div className="main1">
            <table>
                <tr>
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }}  onClick={() => this.showProfile()}>Profile</button></td>
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.editProfile()}>Edit Profile</button></td>
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }}  onClick={() => this.addProduct()}>Add Product</button></td>
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }}  onClick={() => this.logout()}>Logout</button></td>
                </tr><br/>
                <tr>
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.changeAddress()}>Change Address</button></td>
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }}  onClick={() => this.changePassword()}>Change Password</button></td>
                
                <td class="col-sm-2 "><button class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.productDetails()}>Product List</button></td>
                
                </tr>
            </table>
        </div>
        </div>
    );
   }
}
export default SupplierHomeScreen