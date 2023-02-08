import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import error from "../images/error.png";
import valid from "../images/valid.png";

function Form() {
  const [validatInputs, setValidatInputs] = useState({
    FName: false,
    LName: false,
    file: false,
    about: false,
    email: false,
    phone: false,
  });

  const [values, setValues] = useState({
    FName: "",
    LName: "",
    file: "",
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
    } else if (name === "file") {
      regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
      lengthCondition = value.length < 0;
    } else if (name === "email") {
      regex = /^[a-zA-z]\w+@redberry.ge$/;
    } else if (name === "phone") {
      regex = /^\+9955\d+/;
      lengthCondition = value.length > 13 || value.length < 13;
    } else if (name === "about") {
      regex = /.*/;
      lengthCondition = false;
    }
    if (!regex.test(value) || lengthCondition) {
      console.log(regex.test(value));
      setValidatInputs((prevValues) => {
        return { ...prevValues, [name]: true };
      });
    } else {
      console.log("here");
      setValidatInputs((prevValues) => {
        return { ...prevValues, [name]: false };
      });
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function checkIfValidAndProceed(e) {
    const inputEntries = Object.entries(validatInputs);
    const everyInputsCheck = inputEntries.every((input) => input[1] === false);
    const inputValues = Object.entries(values);
    const everyValuesCheck = inputValues.every((value) => value[1] !== "");
    if (!everyInputsCheck || !everyValuesCheck) {
      inputValues.forEach((pair) => {
        if (pair[1] === "") {
          setValidatInputs((prevValues) => {
            let inputName = [pair[0]];
            return {
              ...prevValues,
              [inputName]: true,
            };
          });
        }
      });
      e.preventDefault();
    }
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
              error={validatInputs.FName}
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
              error={validatInputs.LName}
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
            <input
              hidden
              multiple
              type="file"
              onChange={isInputValid}
              name="file"
              value={values.file}
              onInput={handleChange}
            />
          </Button>
          {/* {!validatInputs.file && <img src={error} />} */}
        </Stack>

        <div className="abt-mail-phone">
          <TextField
            name="about"
            value={values.about}
            onInput={isInputValid}
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
            error={validatInputs.email}
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
            error={validatInputs.phone}
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
          <Button
            href="/experience"
            variant="contained"
            size="large"
            onClick={checkIfValidAndProceed}
          >
            შემდეგი
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Form;
