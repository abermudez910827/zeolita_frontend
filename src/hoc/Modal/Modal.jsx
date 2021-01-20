import React from "react";
// todo Areglar esto

const modal = (props) => {
    return (
      <React.Fragment>
         <div id={props.id} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title"> {props.title}</h4>
            </div>
            <div className="modal-body">
                <p>{props.children}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
            </div>
        </div>
        </div>
       
      
      </React.Fragment>
    );
  };
  
  export default modal;