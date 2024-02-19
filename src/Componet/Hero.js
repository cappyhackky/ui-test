import React from 'react'

const Hero = ({data}) => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card">
                                <img src={item['image-url']} className="card-img-top" alt={item.description} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero