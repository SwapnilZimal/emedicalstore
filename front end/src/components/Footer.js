import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.selectcategory = this.selectcategory.bind(this);
    }

    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    render() {
        return (
            <div className="footer" >
                <div  >
                    {/* <table width="90%" style={{marginLeft: "16px"}}>
                    <br></br>
                    <tr>
                    <td>
                    <tr>
                        <a href="/aboutus" className="nav-link">
                            <h6 className="nameColor">About Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/contactus" className="nav-link">
                            <h6 className="nameColor">Contact Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/termsnconditions" className="nav-link">
                            <h6 className="nameColor">Terms & Conditions</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/privacypolicy" className="nav-link">
                            <h6 className="nameColor">Privacy Policy</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/faqs" className="nav-link">
                            <h6 className="nameColor">FAQs</h6>
                        </a>
                    </tr>
                </td>

                <td className="float-end">
                    <div className="nameColor">
                        {' '}
                        <h2>Contact Us</h2> WhatsApp us :{' '}
                        <span
                        style={{ display: 'inline-block;', marginBottom: '1rem;' }}>
                        <a>
                            8306382870
                        </a>
                        </span>
                        <br />
                        <br /> <h2>Download App</h2> <br /> */}
                    {/* <a
                        style={{ marginRight: "16px" }}>
                        <img
                            src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                            alt="Download GreenMart App for Android from Play Store"
                        />
                        </a>
                        <a><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                            alt="Download GreenMart App for iOs from App Store"/></a> */}
                    {/* </div> */}
                    {/* </td> */}
                    {/* </tr> */}
                    {/* </table> */}

                    <div class="container-fluid " style={{ backgroundColor: "#1a2d3b" }}>
                        <div className="row pt-4 align-items-center pb-0">

                            <div className="col-sm">
                                {/* <p><img src="/images/nodejs.png" width="15%" /></p> */}
                                <p> <a href="/aboutus" className="nav-link">
                                    <h6 style={{color:"#faf1cf"}}>About Us</h6>
                                </a></p>
                            </div>

                            <div className="col-sm">
                                {/* <p><img src="/images/react.png" width="15%" /></p> */}
                                <p>   <a href="/contactus" className="nav-link">
                                    <h6 style={{color:"#faf1cf"}}>Contact Us</h6>
                                </a></p>
                            </div>

                            <div className="col-sm">
                                {/* <p><img src="/images/bs.jpg" width="15%" /></p> */}
                                <p> <a href="/termsnconditions" className="nav-link">
                                    <h6 style={{color:"#faf1cf"}}>Terms & Conditions</h6>
                                </a></p>
                            </div>
                            <div className="col-sm">
                                {/* <p><img src="/images/bs.jpg" width="15%" /></p> */}
                                <p> <a href="/privacypolicy" className="nav-link">
                                    <h6 style={{color:"#faf1cf"}} >Privacy Policy</h6>
                                </a></p>
                            </div>
                            <div className="col-sm">
                                {/* <p><img src="/images/bs.jpg" width="15%" /></p> */}
                                <p> <a href="/faqs" className="nav-link">
                                    <h6 style={{color:"#faf1cf"}}>FAQs</h6>
                                </a></p>
                            </div>
                            <div className="col-sm">
                                <p><img src="/images/Logos/Findmedslogo.gif" width="200" height="80" /></p>
                                {/* <p> <a href="/faqs" className="nav-link">
                            <h6 className="nameColor">FAQs</h6>
                        </a></p> */}
                            </div>

                        </div>
                        <div class="copyright" style={{ backgroundColor: "#1a2d3b" }}>
                            <div >© 2022 Pravin Bankar  &  Swapnil Zimal, E-Medical Store, INDIA</div>
                        </div>
                    </div>



                </div>

            </div>
        )
    }
}