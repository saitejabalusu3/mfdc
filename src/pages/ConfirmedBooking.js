import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ConfirmedBooking() {
  const [queryParameters] = useSearchParams();
  return (
    <div className="confirmed-container">
      <table>
        <thead>
          <tr>
            <th>Confirmed Booking!</th>
          </tr>
          <tr>&nbsp;</tr>
        </thead>
        <tbody>
          <tr>
            <td>Date:</td>
            <td>{queryParameters.get("date")}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{queryParameters.get("time")}</td>
          </tr>
          <tr>
            <td>Guests:</td>
            <td>{queryParameters.get("guests")}</td>
          </tr>
          <tr>
            <td>Occasion:</td>
            <td>{queryParameters.get("occasion")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ConfirmedBooking;