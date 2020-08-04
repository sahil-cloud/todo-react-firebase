import React from 'react';
import db from './firebase';

export const Todo = (props) => {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {props.todo.todo.title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 mr-5 mt-2">
          <div
            className="card"
            style={{ width: "18rem", backgroundColor: "lightgoldenrodyellow" }}
            //   key={props.data.id}
          >
            <div className="card-body">
              <h5 className="card-title"> {props.todo.todo.title} </h5>
              <p className="card-text"> {props.todo.todo.desc} </p>
              <button
                className="btn btn-danger mr-2"
                onClick={(e) =>
                  db.collection("Todo").doc(props.todo.id).delete()
                }
              >
                Delete ⚠
              </button>
              
            </div>
          </div>
        </div>
      </>
    );
}
