import React from 'react'
import { FaPaypal, FaLock, FaCreditCard, FaMoneyBill } from "react-icons/fa";
import {AiOutlineCreditCard} from 'react-icons/ai'
import './ProForm.css';
const ProForm = ({id}) => {
  const [formData, setFormData] = useState({
    name: '',
    expirydate: '',
    cvc: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Payment submitted successfully!");
      // Here you can handle actual payment submission
      setFormData({ name: '', expirydate: '', cvc: '', email: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Cardholder name is required";
    if (!formData.expirydate.match(/^(0[1-9]|1[0-2])\/\d{2}$/))
      newErrors.expirydate = "Expiry date must be in MM/YY format";
    if (!formData.cvc.match(/^\d{3}$/)) newErrors.cvc = "CVC must be 3 digits";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email address";
    return newErrors;
  };
  return (
     <div className="modal fade" id={id}>
        <div className='modal-dialog'>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Pro Plan Signup</h5>
                    <button type="button" className="btn-close bg-light position-absolute end-0 top-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="pro-icon">
                    <FaPaypal />
                    <FaCreditCard />
                    <FaMoneyBill />
                    <AiOutlineCreditCard />
                  </div>
                    <form className="text-start mt-3">
                      <div className="form-floating">
                        <input type="text" id='name' className={`form-control bg-light rounded-3`} placeholder="Cardholder Name" required />
                        <label htmlFor="#name">Card holder</label>
                      </div>
                      <div className="row">
                          <div className="form-floating">
                              <input type="text" id='expirydate' className={`form-control bg-light rounded-3`} placeholder="MM / YY" maxLength="5" required />
                              <label className="ms-3" htmlFor="#expirydate">Expiry Date</label>
                          </div>
                          <div className="form-floating">
                              <input type="text" id='CVC' className={`form-control bg-light rounded-3`} placeholder="CVC" maxLength="3" required />
                              <label htmlFor="#CVC" className='ms-3'>CVC</label>
                          </div>
                          <div className="form-floating">
                            <input type="email" id='Bill' className={`form-control bg-light rounded-3`} placeholder="Billing Email" required />
                            <label htmlFor="#Bill" className="ms-3">Billing Email</label>
                          </div>
                          
                      </div>
                      
                    <button onClick={handleSubmit} type="submit" className="btn btn-outline-danger w-100 mt-2">
                     <FaLock /> Pay $19 Securely
                    </button>
                    <p className="secure-text">🔒 Secure SSL Payment</p>
                  </form>
                </div>
            </div>
        </div>
                  
                </div>
  )
}

export default ProForm