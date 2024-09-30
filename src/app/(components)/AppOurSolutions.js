import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function AppOurSolutions({ subCategories = [] }) {
    return (
        <>
            <div className="container-fluid second-bg-cus py-3 mb-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic" data-aos-duration="1400">
                <div className="container d-flex flex-column">
                    <h4 className="font-36 fw-bold text-blue mb-1 text-center mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        O<span className="border-blue-cus  border-2">ur Solution</span>s
                    </h4>

                    <div className="row mb-3 justify-content-center">
                        <h5 className="text-center fw-bold text-blue"></h5>
                        {subCategories.map((subCategory) => (
                            <div key={subCategory.id} className="col-lg-3 col-sm-6 px-2 mb-1 mb-lg-0">
                                <Link href={`/solutions/${subCategory.slug}`} className="d-flex align-items-center flex-column gap-3 hvr-wobble-horizontal mb-cus-m border border-dark border-opacity-25 rounded-3 mb-3 mobile-app-service-box p-2 min-h-100">
                                    <Image
                                        className="w-100 h-100 max-height-cus"
                                        src={subCategory.images[0]}
                                        alt={subCategory.name}
                                        width={100}
                                        height={100}
                                    />
                                    <h5 className="text-dark font-20 fw-bold text-center px-lg-4 w-100 min-h-project-name">
                                        {subCategory.name}
                                    </h5>
                                    <p className="font-15 text-black lh-base text-center text-dark">
                                        {subCategory.short_description}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppOurSolutions
