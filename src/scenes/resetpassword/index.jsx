import React, { useState } from 'react';
import './index.css';
import { Box, TextField, Button } from '@mui/material';

const Resetpassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [doubleConfirmPassword, setDoubleConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [doubleConfirmPasswordError, setDoubleConfirmPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    setNewPasswordError(value.length >= 8 ? '' : 'Password must be at least 8 characters');
  };

  const handleDoubleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setDoubleConfirmPassword(value);
    setDoubleConfirmPasswordError(value === newPassword ? '' : 'Password are not matching');
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Reset Password</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              error={Boolean(newPasswordError)}
              helperText={newPasswordError}
            />
            <br />
            <TextField
              label="Double Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              value={doubleConfirmPassword}
              onChange={handleDoubleConfirmPasswordChange}
              error={Boolean(doubleConfirmPasswordError)}
              helperText={doubleConfirmPasswordError}
            />
            <br />
            <Button type="submit" variant="contained" color="primary" className="submit-button">
              RESET
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;