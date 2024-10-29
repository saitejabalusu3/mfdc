import React, { useState, useEffect, useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../functions/utils';


function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const navigate = useNavigate();
  
  const initializeTimes = (date) => {
    const dateObj = new Date(date)
    return fetchAPI(dateObj);
  }
  
  const updateTimes = (times) => {
    return { availableTimes: times };
  }

  const reducer = (state, action) => {
    return updateTimes(initializeTimes(action.date));
  }

  const [state, dispatch] = useReducer(reducer, { availableTimes: [] });

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      return navigate(
        `/confirmed?date=${formData.date}&time=${formData.time}&guests=${formData.guests}&occasion=${formData.occasion}`
      );
    }
  }

  return (
    <div>
      <BookingForm
        data={{ date, time, guests, occasion, state }}
        functions={{ setDate, setTime, setGuests, setOccasion, dispatch }}
        onSubmit={submitForm}
      />
    </div>
  )
}

export default BookingPage;