import Image from 'next/image';
import React from 'react';

import svgexport1 from '../../../public/images/icons/svgexport-1.svg';
import svgexport2 from '../../../public/images/icons/svgexport-2.svg';
import svgexport3 from '../../../public/images/icons/svgexport-3.svg';
import svgexport4 from '../../../public/images/icons/svgexport-4.svg';
import svgexport5 from '../../../public/images/icons/svgexport-5.svg';
import svgexport6 from '../../../public/images/icons/svgexport-6.svg';
import mysql from '../../../public/images/icons/mysql-official.svg';
import netframework from '../../../public/images/icons/netframework.svg';

function SoftwareCarousel() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="d-flex flex-wrap justify-content-center align-items-center software-logo owl-carousel">

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={svgexport1} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={svgexport2} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={svgexport3} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={svgexport4} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={svgexport5} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={svgexport6} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={mysql} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                    <div className="text-center mx-3 cus-height-logo">
                        <Image src={netframework} className="img-fluid"
                            alt="GUI Solutions Lanka (Pvt) Ltd" width={100} height={100} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SoftwareCarousel;
