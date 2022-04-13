import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import React, { Component } from 'react'

class AdminHomeScreen extends Component {
    constructor(props) {
        super(props)

        this.showProfile = this.showProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.showPendingOrders = this.showPendingOrders.bind(this);
        this.showdeliveredOrders = this.showdeliveredOrders.bind(this);
        this.showSupplier = this.showSupplier.bind(this);
        this.showDeliveryBoy = this.showDeliveryBoy.bind(this);
        this.logout = this.logout.bind(this);
    }

    showProfile() {
        this.props.history.push('/myaccount/profile');
    }
    editProfile() {
        this.props.history.push('/myaccount/editprofile');
    }
    changePassword() {
        this.props.history.push('/myaccount/change-password');
    }
    showPendingOrders() {
        this.props.history.push('/pendingorderforadmin');
    }
    showdeliveredOrders() {
        this.props.history.push('/deliveredorderforadmin');
    }
    showSupplier() {
        this.props.history.push('/showsupplier');
    }
    showDeliveryBoy() {
        this.props.history.push('/showdeliveryboy');
    }
    logout() {
        this.props.history.push('/logout');
    }
    render() {
        return (
            <div>
                <Navigation />
                <div className="main1">
                    <table>
                        <tr>
                            <td class="col-sm-2 ">
                                <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }}    onClick={() => this.showProfile()}>Profile</button></td>
                            <td class="col-sm-2 ">
                                <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.editProfile()}>Edit Profile</button></td>
                            <td class="col-sm-2 ">
                                <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.changePassword()}>Change Password</button></td>
                            <td class="col-sm-2 ">
                                <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.showPendingOrders()}>Pending Orders</button></td>
                        </tr>
                        <br/>
                        <tr>
                            <td class="col-sm-2">
                            <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.logout()}>Logout</button></td>
                                
                            <td class="col-sm-2">
                                <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.showSupplier()}>Show Supplier</button></td>
                            <td class="col-sm-2">
                                <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.showDeliveryBoy()}>Show Delivery Boy</button></td>
                            <td class="col-sm-2">
                            <button type="button" class="btn" style={{ backgroundColor: "#1a2d3b",color:"#faf1cf" }} onClick={() => this.showdeliveredOrders()}>Delivered Orders</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default AdminHomeScreen