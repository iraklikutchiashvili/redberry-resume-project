import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import error from "../images/error.png";
import valid from "../images/valid.png";

function Personal(props) {
  const [validatInputs, setValidatInputs] = useState({
    name: false,
    surname: false,
    image: false,
    about_me: false,
    email: false,
    phone_number: false,
  });

  function isInputValid(event) {
    const value = event.target.value;
    const name = event.target.name;
    let regex;
    let lengthCondition;
    if (name === "name" || name === "surname") {
      regex = /[ა-ჰ]+/;
      lengthCondition = value.length < 2;
    } else if (name === "image") {
      regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
      lengthCondition = value.length < 0;
    } else if (name === "email") {
      regex = /^[a-zA-z]\w+@redberry.ge$/;
    } else if (name === "phone_number") {
      regex = /^\+9955\d+/;
      lengthCondition = value.length > 13 || value.length < 13;
    } else if (name === "about_me") {
      regex = /.*/;
      lengthCondition = false;
    }
    if (!regex.test(value) || lengthCondition) {
      setValidatInputs((prevValues) => {
        return { ...prevValues, [name]: true };
      });
    } else {
      setValidatInputs((prevValues) => {
        return { ...prevValues, [name]: false };
      });
    }
  }

  const { data, handleFile, handleChange } = props;

  function checkIfValidAndProceed(e) {
    const inputEntries = Object.entries(validatInputs);
    const everyInputsCheck = inputEntries.every((input) => input[1] === false);
    const inputValues = Object.entries(data);
    const onlyPersonalEntries = inputValues.filter(
      (pair) => pair[0] !== "experiences" || pair[0] !== "educations"
    );
    const everyValuesCheck = onlyPersonalEntries.every(
      (value) => value[1] !== ""
    );
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
      // e.preventDefault();
      props.setPage(props.currentPage + 1);
    } else {
      props.setPage(props.currentPage + 1);
    }
  }

  return (
    <div>
      <Box component="form" autoComplete="off">
        <div className="fullname">
          <div className="name">
            <TextField
              value={data.name}
              name="name"
              onBlur={isInputValid}
              onChange={handleChange}
              error={validatInputs.name}
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
              value={data.surname}
              name="surname"
              onBlur={isInputValid}
              onChange={handleChange}
              error={validatInputs.surname}
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
              onChange={handleFile}
              name="image"
              onInput={isInputValid}
            />
          </Button>
          {/* {!validatInputs.file && <img src={error} />} */}
        </Stack>

        <div className="abt-mail-phone">
          <TextField
            name="about_me"
            value={data.about_me}
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
            value={data.email}
            id="standard-helperText"
            label="ელფოსტა"
            placeholder="anzor666@redberry.ge"
            helperText="უნდა მთავრდებოდეს @redberry.ge-თი"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            name="phone_number"
            onBlur={isInputValid}
            onChange={handleChange}
            error={validatInputs.phone_number}
            value={data.phone_number}
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
            sx={{ bgcolor: "#6B40E3" }}
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

export default Personal;
