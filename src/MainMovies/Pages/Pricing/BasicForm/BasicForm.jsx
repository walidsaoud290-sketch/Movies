import React from 'react'
import {useNavigate} from 'react-router-dom';
import './BasicForm.css'
const BasicForm = ({id}) => {
  const navigate = useNavigate();
  return (
    <div className="modal fade" id={id}>
        <div className='modal-dialog'>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Welcome to MovieStream</h5><img src="" alt="" />
                    <button type="button" className="btn-close X bg-light position-absolute end-0 top-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className="text-start mt-3">
                    <p>
                      As a Basic Plan user, you can enjoy watching <strong>1 movie or series</strong> at a time.  
                      Explore our collection and have a great time!
                    </p>
                    <button id='tk' type="submit" className="btn btn-outline-danger w-100 mt-2" data-bs-dismiss="modal" aria-label="Close">
                      Thank you
                    </button>
                  </form>
                </div>
            </div>
        </div>
                  
                </div>
  )
}

export default BasicForm