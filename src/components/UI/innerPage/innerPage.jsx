import React from 'react'

const innerPage = (props) => {
    const styleImg = {
    backgroundImage: props.img,
};
    return (
      <div className="inner-page">
        <div className="slider-item" style={styleImg}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center fadeInUp element-animated">
              <div className="col-md-8 text-center col-sm-12 pt-5">
                <h1 className="pt-5">
                  <span>{props.title}</span>
                </h1>
                <p className="mb-5 w-75">{props.description}</p>
                {props.loader}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default innerPage;