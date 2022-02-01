import React from 'react';

let cardValues = [
    {
        cardTitle : "Free",
        cardPrice : "$0",
        UserLimit: "Single",
        storageLimit : 5,
        publicProjetcs: "Unlimited",
        communityAcesss :true,
        unlimitedPrivateProjects: false,
        dedicatedPhoneSupport : false,
        freeSubDomain : false,
        monthlyStatusReport:false
    },
    {
        cardTitle : "Plus",
        cardPrice : "$9",
        UserLimit: "5",
        storageLimit : 50,
        publicProjetcs: "Unlimited",
        communityAcesss :true,
        unlimitedPrivateProjects: true,
        dedicatedPhoneSupport : true,
        freeSubDomain : true,
        monthlyStatusReport:false
    },
    {
        cardTitle : "Pro",
        cardPrice : "$49",
        UserLimit: "Unlimited",
        storageLimit : 150,
        publicProjetcs: "Unlimited",
        communityAcesss :true,
        unlimitedPrivateProjects: true,
        dedicatedPhoneSupport : true,
        freeSubDomain : true,
        monthlyStatusReport:true
    }
];


const Features = () => {
    return(
        <>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        {cardValues.map((values,key)=>{
                            return(
                            <div className=" col-12  col-sm-8 col-md-6 col-lg-4" key={key}>
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-muted text-uppercase text-center">{values.cardTitle}</h5>
                                        <h6 className="card-price text-center">{values.cardPrice}<span className="period">/month</span></h6>
                                        <hr/>
                                        <ul className="fa-ul">
                                        <li className={values.UserLimit !== "Single" ? "font-weight-bold" : ""}><span className="fa-li"><i className="fas fa-check"></i></span>{(values.UserLimit === "Single" ? "Single User" : values.UserLimit+" Users") }</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{(values.storageLimit ? values.storageLimit : "No") +"GB Storage"}</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{(values.publicProjetcs ? values.publicProjetcs : "No") +" Public Projects"} </li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li className={!(values.unlimitedPrivateProjects) ? "text-muted" : ""}><span className="fa-li"><i className={values.unlimitedPrivateProjects ?"fas fa-check": "fas fa-times"}></i></span>Unlimited
                                            Private Projects</li>
                                        <li className={!(values.dedicatedPhoneSupport) ? "text-muted" : ""}><span className="fa-li"><i className={values.dedicatedPhoneSupport ?"fas fa-check": "fas fa-times"}></i></span>Dedicated
                                            Phone Support</li>
                                        <li className={!(values.freeSubDomain) ? "text-muted" : ""}><span className="fa-li"><i className={values.freeSubDomain ?"fas fa-check": "fas fa-times"}></i></span>{(values.UserLimit === "Unlimited"? <span><strong>Unlimited</strong> Free Subdomains</span> : "Free Subdomain")} 
                                        </li>
                                        <li className={!(values.monthlyStatusReport) ? "text-muted" : ""}><span className="fa-li"><i className={values.monthlyStatusReport ?"fas fa-check": "fas fa-times"}></i></span>Monthly Status
                                            Reports</li>
                                        </ul>
                                        <div className="d-grid text-center">
                                            <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})}
                        
                    </div>
                </div>
            </section>
        </>
    )
};

export default Features;
