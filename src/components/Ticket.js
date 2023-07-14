import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
const NewTicketPage = () => {
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState('');
  const [comments, setComments] = useState('');
  const [isTaskCreated, setIsTaskCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic goes here
    // Submit form logic goes here

    // Show the "New Task Created Successfully" pop-up
    setIsTaskCreated(true);
    toast.success('New Task Created Successfully');
  };

  return (
    <div>
      <h2>New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Lead Source:</label>
          <select value={leadSource} onChange={(e) => setLeadSource(e.target.value)}>
            <option value="">Select Lead Source</option>
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vehicle Make:</label>
          <input
            type="text"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vehicle Registration Number:</label>
          <input
            type="text"
            value={vehicleRegistration}
            onChange={(e) => setVehicleRegistration(e.target.value.toUpperCase())}
            required
          />
        </div>
        <div>
          <label>Breakdown Issue:</label>
          <input
            type="text"
            value={breakdownIssue}
            onChange={(e) => setBreakdownIssue(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Service Fee:</label>
          <input
            type="text"
            value={serviceFee}
            onChange={(e) => setServiceFee(e.target.value)}
          />
        </div>
        <div>
          <label>Assistance Time:</label>
          <input
            type="datetime-local"
            value={assistanceTime}
            onChange={(e) => setAssistanceTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
      {/* {isTaskCreated && (
        <div className="popup">
          <p>New Task Created Successfully</p>
        </div>
      )} */}
    </div>
  );
};

export default NewTicketPage;
