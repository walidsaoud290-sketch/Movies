import React from 'react'
import './ProForm.css';
const ProForm = ({id}) => {
  return (
     <div className="modal fade" id={id}>
        <div className='modal-dialog'>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Pro Plan Signup</h5>
                    <button type="button" className="btn-close bg-light position-absolute end-0 top-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className="text-start mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Your Email"
                      name="email"
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Plan"
                      name="plan"
                      value="Pro"
                      readOnly
                    />
                    <button type="submit" className="btn btn-outline-danger w-100 mt-2">
                      Submit
                    </button>
                  </form>
                </div>
            </div>
        </div>
                  
                </div>
  )
}

export default ProForm