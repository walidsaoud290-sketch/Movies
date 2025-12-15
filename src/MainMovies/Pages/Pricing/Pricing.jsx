import React from 'react'
import './Pricing.css';
import EliteForm from './EliteForm/EliteForm';
import BasicForm from './BasicForm/BasicForm';
import ProForm from './ProForm/ProForm';
const Pricing = () => {
  return (
    <section className="pricing-pure">
      <h2 className="pricing-title">Plans & Pricing</h2>
      <p className="pricing-subtitle">
        Dark power. Red energy.
      </p>

      <div className="pricing-grid">

        <div className="pricing-item">
          <h4>Basic</h4>
          <span className="pricing-price">$0</span>
          <ul>
            <li>5 users</li>
            <li>1GB storage</li>
            <li>Email support</li>
          </ul>
          <button data-bs-toggle="modal"
                  data-bs-target="#basicForm"
                  aria-expanded="false">Start Free</button>
        </div>

        <div className="pricing-item pricing-featured">
          <span className="pricing-badge">POPULAR</span>
          <h4>Pro</h4>
          <span className="pricing-price">$19</span>
          <ul>
            <li>Unlimited users</li>
            <li>10GB storage</li>
            <li>Priority support</li>
          </ul>
          <button data-bs-toggle="modal"
                  data-bs-target="#proForm"
                  aria-expanded="false" className="btn-primary">Go Pro</button>
        </div>

        <div className="pricing-item">
          <h4>Elite</h4>
          <span className="pricing-price">$39</span>
          <ul>
            <li>Unlimited access</li>
            <li>50GB storage</li>
            <li>24/7 support</li>
          </ul>
          <button data-bs-toggle="modal"
                  data-bs-target="#eliteForm"
                  aria-expanded="false">Contact Sales</button>
        </div>

      </div>
      <EliteForm id="eliteForm"/>
      <BasicForm id="basicForm"/>
      <ProForm id="proForm"/>
    </section>
  )
}

export default Pricing