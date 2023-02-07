import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Form() {
  const [validatNames, setValidatNames] = useState({
    FName: false,
    LName: false,
    email: false,
    phone: false,
  });

  const [values, setValues] = useState({
    FName: "",
    LName: "",
    about: "",
    email: "",
    phone: "",
  });

  function isInputValid(event) {
    const value = event.target.value;
    const name = event.target.name;
    let regex;
    let lengthCondition;
    if (name === "FName" || name === "LName") {
      regex = /[ა-ჰ]+/;
      lengthCondition = value.length < 2;
    } else if (name === "email") {
      regex = /^[a-zA-z]\w+@redberry.ge$/;
    } else if (name === "phone") {
      regex = /^\+9955\d+/;
      lengthCondition = value.length === 9;
    }
    if (!regex.test(value) || lengthCondition) {
      console.log(regex.test(value));
      setValidatNames({
        ...validatNames,
        [name]: true,
      });
    } else {
      setValidatNames({
        ...validatNames,
        [name]: false,
      });
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div>
      <Box component="form" autoComplete="off">
        <div className="fullname">
          <div className="name">
            <TextField
              value={values.FName}
              name="FName"
              onBlur={isInputValid}
              onChange={handleChange}
              error={validatNames.FName}
              id="standard-helperText"
              label="სახელი"
              placeholder="ანზორი"
              helperText="მინიმუმ 2 ასო ქართული ასოები"
              variant="outlined"
              fullWidth={true}
            />
          </div>

          <div className="name">
            <TextField
              value={values.LName}
              name="LName"
              onBlur={isInputValid}
              onChange={handleChange}
              error={validatNames.LName}
              id="standard-helperText"
              label="გვარი"
              placeholder="მგელაძე"
              helperText="მინიმუმ 2 ასო ქართული ასოები"
              variant="outlined"
              fullWidth={true}
            />
          </div>
        </div>
        <Stack direction="row" alignItems="center" spacing={2}>
          <h4>პირადი ფოტოს ატვირთვა</h4>
          <Button variant="contained" component="label" required>
            ატვირთვა
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>

        <div className="abt-mail-phone">
          <TextField
            name="about"
            value={values.about}
            onChange={handleChange}
            id="outlined-multiline-static"
            label="ჩემ შესახებ (არასავალდებულო)"
            multiline
            rows={4}
            placeholder="ზოგადი ინფო შენ შესახებ"
            fullWidth={true}
          />
          <TextField
            name="email"
            onChange={handleChange}
            onBlur={isInputValid}
            error={validatNames.email}
            value={values.email}
            id="standard-helperText"
            label="ელფოსტა"
            placeholder="anzor666@redberry.ge"
            helperText="უნდა მთავრდებოდეს @redberry.ge-თი"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            name="phone"
            onBlur={isInputValid}
            onChange={handleChange}
            error={validatNames.phone}
            value={values.phone}
            id="standard-helperText"
            label="მობილურის ნომერი"
            placeholder="+995 555 55 55 55"
            helperText="უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"
            variant="outlined"
            fullWidth={true}
          />
        </div>
        <div className="next-btn">
          <Button variant="contained" size="large">
            შემდეგი
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Form;
