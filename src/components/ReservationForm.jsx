import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Stack,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DateTimeSelector from "./DateTimePicker";
import Confirmation from "./Confirmation";

const ReservationForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    occasion:"",
    noOfDiner:"",
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
    tempErrors.phone = formData.phone ? "" : "This field is required.";
    tempErrors.email = formData.email ? "" : "This field is required.";
    tempErrors.noOfDiner = formData.noOfDiner ? "" : "This field is required.";
    tempErrors.noOfDiner = formData.noOfDiner ? "" : "This field is required.";

    if (formData.phone && !/^[0-9]+$/.test(formData.phone)) {
      tempErrors.phone = "Phone number should only contain numbers.";
    }

    if (
      formData.email &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      tempErrors.email = "Invalid email format.";
    }

    setErrors({
      ...tempErrors,
    });

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmit(true);
      console.log("Form is valid:", formData);
    }
  };

  return !isSubmit ? (
    <Container maxWidth="xl" sx={{ padding: "10px" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        Reservation Form
      </Typography>
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
          type="tel"
          inputProps={{
            pattern: "[0-9]*",
          }}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Occasion</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.occasion}
            label="occasion"
            name="occasion"
            onChange={handleChange}
          >
            <MenuItem value={"Birthday"}>Birthday</MenuItem>
            <MenuItem value={"Anniversary"}>Anniversary</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ paddingTop: "20px" }}
        >
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
        <Box sx={{ marginTop: "20px", textAlign: "right" }}>
          <Button
            onSubmit={handleSubmit}
            type="submit"
            variant="outlined"
            sx={{
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            Reserve a table
          </Button>
        </Box>
      </form>
    </Container>
  ) : (
    <Confirmation />
  );
};

export default ReservationForm;
