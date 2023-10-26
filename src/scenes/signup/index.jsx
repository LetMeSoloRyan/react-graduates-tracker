import React, { useState } from 'react';
import './index.css';
import { TextField, Button, MenuItem } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [mobile, setMobile] = useState('');
  const [program, setProgram] = useState('');
  const [cohort, setCohort] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [cohortError, setCohortError] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length >= 8 ? '' : 'Password must be at least 8 characters');
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);
    setMobileError(isNaN(Number(value)) ? 'Mobile must contain only digits' : '');
  };

  const handleCohortChange = (e) => {
    const value = e.target.value;
    setCohort(value);
    setCohortError(isNaN(Number(value)) ? 'Cohort must contain only digits' : '');
  };

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNaN(Number(mobile)) && !isNaN(Number(cohort)) && password.length >= 8) {
      console.log('Form submitted');
    } else {
      console.log('Invalid form data');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Register here</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: <EmailOutlinedIcon />,
          }}
        />
        <br />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={Boolean(passwordError)}
          helperText={passwordError}
          InputProps={{
            startAdornment: <LockOutlinedIcon />,
          }}
        />
         <br />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: <PersonOutlinedIcon />,
          }}
        />
        <br />
        <TextField
          label="Nickname"
          variant="outlined"
          fullWidth
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          InputProps={{
            startAdornment: <PersonOutlinedIcon />,
          }}
        />
        <br />
        <TextField
          label="Mobile Phone"
          variant="outlined"
          fullWidth
          value={mobile}
          onChange={handleMobileChange}
          error={Boolean(mobileError)}
          helperText={mobileError}
          InputProps={{
            startAdornment: <PhoneAndroidOutlinedIcon />,
          }}
        />
        <br />
        <div className="programs">
          <TextField
            label="Program"
            variant="outlined"
            fullWidth
            select
            value={program}
            onChange={handleProgramChange}
            InputProps={{
              startAdornment: <LocalLibraryOutlinedIcon />,
            }}
          >
            <MenuItem value="">Select a program</MenuItem>
            <MenuItem value="customer_experience">Customer Experience and Hospitality Management Program</MenuItem>
            <MenuItem value="digital_marketing">Digital Marketing Program</MenuItem>
            <MenuItem value="junior_data_engineer">Junior Data Engineer Program</MenuItem>
            <MenuItem value="frontend_web_developer">Frontend WebDeveloper Program</MenuItem>
            <MenuItem value="eldercare_talent_training">Eldercare Talent Training Program</MenuItem>
            <MenuItem value="robot_support_assistant">Robot Support Assistant Program</MenuItem>
            <MenuItem value="manual_quality_assurance_testing">Manual Quality Assurance Testing Program</MenuItem>
          </TextField>
        </div>
        <br />
        <TextField
          label="Cohort"
          variant="outlined"
          fullWidth
          value={cohort}
          onChange={handleCohortChange}
          error={Boolean(cohortError)}
          helperText={cohortError}
          InputProps={{
            startAdornment: <FormatListNumberedOutlinedIcon />,
          }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={Boolean(passwordError || mobileError || cohortError)}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;