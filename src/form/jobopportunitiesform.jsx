import React, { useState } from 'react';
import './form.css';
import { Box, TextField, Button, Select, MenuItem, InputLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const JobOpportunityForm = () => {
  const [employmentType, setEmploymentType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [datePosted, setDatePosted] = useState(null);
  const [position, setPosition] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [contactNumberError, setContactNumberError] = useState(false);

  const handleDateChange = (date) => {
    setDatePosted(date);
  };

  const handleContactNumberChange = (e) => {
    const value = e.target.value;
    setContactNumber(value);
    setContactNumberError(isNaN(Number(value)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      employmentType,
      companyName,
      salary,
      datePosted,
      position,
      contactPerson,
      contactNumber,
      contactEmail,
      requirements,
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Job Opportunity Form</div>
        <div className="underline" />
      </div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <InputLabel id="employment-type-label">Employment Type</InputLabel>
          <Select
            required
            id="employment-type"
            labelId="employment-type-label"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            variant="outlined"
            className="form-input"
          >
            <MenuItem value="">Select an employment type</MenuItem>
            <MenuItem value="Full-time">Full-time</MenuItem>
            <MenuItem value="Part-time">Part-time</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </Select>
          <br />
          <TextField
            required
            id="company-name"
            label="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            variant="outlined"
            className="form-input"
          />
          <br />
          <InputLabel id="salary-label">Select salary range</InputLabel>
          <Select
            required
            id="salary"
            labelId="salary-label"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            variant="outlined"
            className="form-input"
          >
            <MenuItem value="">Select salary range</MenuItem>
            <MenuItem value="15,000-17,999">15,000-17,999</MenuItem>
            <MenuItem value="18,000-20,999">18,000-20,999</MenuItem>
            <MenuItem value="21,000-23,999">21,000-23,999</MenuItem>
            <MenuItem value="24,000-26,999">24,000-26,999</MenuItem>
            <MenuItem value="27,000-29,999">27,000-29,999</MenuItem>
            <MenuItem value="30,000">30,000</MenuItem>
          </Select>
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Posted"
              value={datePosted}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br />

          <TextField
            required
            id="position"
            label="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            variant="outlined"
            className="form-input"
          />
          <br />
          <TextField
            required
            id="contact-person"
            label="Contact Person"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            variant="outlined"
            className="form-input"
          />
          <br />
          <TextField
            required
            id="contact-number"
            label="Contact Number"
            value={contactNumber}
            onChange={handleContactNumberChange}
            variant="outlined"
            className="form-input"
            error={contactNumberError}
            helperText={contactNumberError ? 'Mobile must contain onlydigits' : ''}
          />
          <br />
          <TextField
            required
            id="contact-email"
            label="Contact Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            variant="outlined"
            className="form-input"
          />
          <br />
          <TextField
            required
            id="requirements"
            label="Requirements"
            multiline
            rows={4}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            variant="outlined"
            className="form-input"
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default JobOpportunityForm;