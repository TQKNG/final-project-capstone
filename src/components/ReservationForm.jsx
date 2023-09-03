import React, { useState } from "react";
import { Button, TextField, Container, Typography, Stack } from "@mui/material";
import DateTimeSelector from "./DateTimePicker";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "This field is required.";
    tempErrors.lastName = formData.lastName ? "" : "This field is required.";
    setErrors({
      ...tempErrors,
    });

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid:", formData);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "10px" }}>
      <Typography variant="h5">Reservation Form</Typography>
      <form onSubmit={handleSubmit} sx={{ height: "400px" }}>
        <TextField
          variant="outlined"
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Phone Number"
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="phone"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <TextField
            variant="outlined"
            label="Number of diners"
            type="number"
            name="noOfDiner"
            value={formData.noOfDiner}
            onChange={handleChange}
            error={Boolean(errors.noOfDiner)}
            helperText={errors.noOfDiner}
            fullWidth
            margin="normal"
          />
          <DateTimeSelector />
        </Stack>
        <Button sx={{marginTop:"10px"}} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ReservationForm;
