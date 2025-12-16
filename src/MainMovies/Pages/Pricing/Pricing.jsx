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
            <li>Watch on 1 device</li>
            <li>Limited movie access</li>
            <li>Standard video quality</li>
          </ul>
          <button data-bs-toggle="modal"
                  data-bs-target="#basicForm"
                  aria-expanded="false"
                  className='btn  btn-outline-danger w-100 mt-2'>Start Watching</button>
        </div>

        <div className="pricing-item pricing-featured">
          <span className="pricing-badge">MOST POPULAR</span>
          <h4>Pro</h4>
          <span className="pricing-price">$19</span>
          <ul>
            <li>Watch on multiple devices</li>
            <li>Unlimited movies & servies</li>
            <li>HD & FULL HD quality</li>
          </ul>
          <button 
          data-bs-toggle="modal"
                  data-bs-target="#proForm"
                  aria-expanded="false" className="btn  btn-outline-danger w-100 mt-2">Upgrade to Pro</button>
        </div>

        <div className="pricing-item">
          <h4>Elite</h4>
          <span className="pricing-price">$39</span>
          <ul>
            <li>All content unlocked</li>
            <li>Ultra HD & 4K quality</li>
            <li>VIP support 24/7</li>
          </ul>
          <button data-bs-toggle="modal"
                  data-bs-target="#eliteForm"
                  aria-expanded="false"
                  className='btn btn-outline-danger  w-100 mt-2'
                  > Join Elite</button>
        </div>

      </div>
      <EliteForm id="eliteForm"/>
      <BasicForm id="basicForm"/>
      <ProForm id="proForm"/>
    </section>
  )
}

export default Pricing