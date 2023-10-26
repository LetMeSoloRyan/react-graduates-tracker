import React, { useState } from 'react';
import './form.css';
import { Box, TextField, Button, Select, MenuItem, InputLabel } from '@mui/material';

const JobOfferForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');
  const [title, setTitle] = useState('');
  const [workLocationArrangement, setWorkLocationArrangement] = useState('');
  const [benefits, setBenefits] = useState('');
  const [requirement, setRequirement] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Job Offer Update</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <TextField
            required
            id="annual-salary"
            label="Annual Salary"
            type="number"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value)}
            variant="outlined"
            className="form-input"
            InputProps={{
              inputProps: { min: 0 },
              startAdornment: '$',
            }}
          />
          <br />
            <br />
            <TextField
              required
              id="job-title"
              label="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="outlined"
              className="form-input"
            />
            <br />
            <InputLabel id="work-location-label">Work Location Arrangement</InputLabel>
            <Select
              required
              id="work-location"
              labelId="work-location-label"
              value={workLocationArrangement}
              onChange={(e) => setWorkLocationArrangement(e.target.value)}
              variant="outlined"
              className="form-input"
            >
              <MenuItem value="">Select a work location arrangement</MenuItem>
              <MenuItem value="Onsite">Onsite</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
            <br />
            <TextField
              required
              id="benefits"
              label="Benefits"
              multiline
              rows={4}
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
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
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              variant="outlined"
              className="form-input"
            />
            <br />
            <Button type="submit" variant="contained" color="primary" className="submit-button">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default JobOfferForm;