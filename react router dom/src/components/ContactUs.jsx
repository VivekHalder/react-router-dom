import React from "react";

function ContactUs(){
    return (
        <>
            <div className="h-full w-2/3 flex justify-center flex-col">
                <h1 className="flex justify-center text-3xl font-semibold">
                    ASK OUR CUSTOMER SERVICE
                </h1>
                <h1 className="flex justify-center">
                    Monday - Sunday: 8:00 AM to 8:00 PM
                </h1>
            </div>

            <div className="p-12 h-full w-2/3 flex justify-center flex-col">
                <h1 className="flex justify-center text-3xl font-semibold">
                    CONSUMER PROTECTION
                </h1>
                <p className="w-1/2 py-3 mx-auto">
                In compliance with Consumer Protection (E- Commerce) Rules, 2020 and the Information Technology Act, 2000 and rules made thereunder, the details of the Grievance Officer and the Nodal Person are mentioned below:
                </p>
                <p className="w-1/2 py-3 mx-auto">
                    <h1 className="font-bold">
                        Nodal Person
                    </h1>

                    Name: Nikhil Mahajan
                    <br />
                    Designation: Digital Brand Commerce Director
                    <br />
                    Address: Plot No. 53, Sector-32, Institutional Area, Gurugram, Haryana-122001, India.
                    <br />
                    Email: <span className="underline"> service@onlineshop.adidas.co.in
                        </span>
                    <br />
                    Tel: <span className="underline"> 1-800-120-3300 </span> 
                    <br />
                </p>
            </div>
        </>
    )
}

export default ContactUs;