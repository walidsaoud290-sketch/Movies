import React, { useState } from "react";
import { FaLock, FaCrown, FaCreditCard } from "react-icons/fa";
import "./EliteForm.css";
import {useNavigate} from 'react-router-dom'

const EliteForm = ({ id }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "",
    terms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Cardholder name is required";

    if (!/^\d{16}$/.test(formData.cardNumber))
      newErrors.cardNumber = "Card number must be 16 digits";

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry))
      newErrors.expiry = "Format MM/YY";

    if (!/^\d{3}$/.test(formData.cvc))
      newErrors.cvc = "CVC must be 3 digits";

    if (!formData.country)
      newErrors.country = "Select your country";

    if (!formData.terms)
      newErrors.terms = "You must accept the terms";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      navigate('/home');
      // API payment logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content elite-modal">
          <div className="modal-header">
            <h5 className="modal-title">
              <FaCrown /> Elite Plan – $39/month
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>

              {/* Cardholder */}
              <div className="form-floating mb-2">
                <input
                  type="text"
                  id="name"
                  className={`form-control bg-dark text-light ${errors.name && "is-invalid"}`}
                  placeholder="Cardholder Name"
                  onChange={handleChange}
                />
                <label htmlFor="name">Cardholder Name</label>
                {errors.name && <div className="invalid-feedback text-danger">{errors.name}</div>}
              </div>

              {/* Card Number */}
              <div className="form-floating mb-2">
                <input
                  type="text"
                  id="cardNumber"
                  className={`form-control bg-dark text-light ${errors.cardNumber && "is-invalid"}`}
                  placeholder="Card Number"
                  maxLength="16"
                  onChange={handleChange}
                />
                <label htmlFor="cardNumber">
                  <FaCreditCard /> Card Number
                </label>
                {errors.cardNumber && <div className="invalid-feedback text-danger">{errors.cardNumber}</div>}
              </div>

              <div className="row g-2">
                {/* Expiry */}
                <div className="form-floating col">
                  <input
                    type="text"
                    id="expiry"
                    className={`form-control bg-dark text-light ${errors.expiry && "is-invalid"}`}
                    placeholder="MM/YY"
                    maxLength="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="expiry">Expiry (MM/YY)</label>
                  {errors.expiry && <div className="invalid-feedback text-danger">{errors.expiry}</div>}
                </div>

                {/* CVC */}
                <div className="form-floating col">
                  <input
                    type="text"
                    id="cvc"
                    className={`form-control bg-dark text-light ${errors.cvc && "is-invalid"}`}
                    placeholder="CVC"
                    maxLength="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="cvc">CVC</label>
                  {errors.cvc && <div className="invalid-feedback text-danger">{errors.cvc}</div>}
                </div>
              </div>

              {/* Country */}
              <div className="form-floating mt-2">
                <select
                  id="country"
                  className={`form-select bg-dark text-light ${errors.country && "is-invalid"}`}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="FR">France</option>
                  <option value="MA">Morocco</option>
                  <option value="UK">United Kingdom</option>
                </select>
                <label htmlFor="country">Billing Country</label>
                {errors.country && <div className="invalid-feedback text-danger">{errors.country}</div>}
              </div>

              {/* Terms */}
              <div className="form-check mt-3">
                <input
                  className={`form-check-input ${errors.terms && "is-invalid"}`}
                  type="checkbox"
                  id="terms"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the Terms & Conditions
                </label>
                {errors.terms && <div className="invalid-feedback text-danger d-block">{errors.terms}</div>}
              </div>

              <button type="submit" className="btn btn-outline-danger w-100 mt-3">
                <FaLock /> Pay $39 Securely
              </button>

              <p className="secure-text text-center mt-2">
                🔒 SSL Secure Payment • Cancel anytime
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EliteForm;