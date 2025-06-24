import React from 'react';
import './Policy.css';

const Policy = () => {
  return (
    <section className="policies-section">
      <div className="policies-container">
        <h1>Booking Policies</h1>
        <p className="policies-subtitle">
          Please review our booking policies before scheduling your appointment.
        </p>

        <div className="policies-grid">
          <div className="policy-card">
            <h2>Cancellation Policy</h2>
            <p>
              We understand that sometimes schedule adjustments are necessary. We respectfully request at least 24 hours notice for cancellations.
            </p>
            <p>
              No-shows will be charged the full service price and may be required to pay a deposit for future bookings.
            </p>
          </div>

          <div className="policy-card">
            <h2>Rescheduling Policy</h2>
            <p>
              Rescheduling is available with at least 24 hours notice without any penalty.
            </p>
            <p>
              We appreciate your understanding as this helps us serve all our clients efficiently.
            </p>
          </div>

          <div className="policy-card">
            <h2>Late Arrival Policy</h2>
            <p>
              If you arrive more than 20 minutes late, we may need to reschedule your appointment.
            </p>
            <p>
              The full service fee will still apply to shortened appointments.
            </p>
          </div>

          <div className="policy-card">
            <h2>Guest Policy</h2>
            <p>
              Due to space limitations, we kindly request that clients limit accompanying guests to one person.
            </p>
            <p>
              Please inform us in advance if you need to bring additional guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;