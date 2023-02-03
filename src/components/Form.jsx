import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Form() {
  return (
    <div>
      <Box>
        <div className="fullname">
          <div className="name">
            <TextField
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
          <Button variant="contained" component="label">
            ატვირთვა
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>

        <div className="abt-mail-phone">
          <TextField
            id="outlined-multiline-static"
            label="ჩემ შესახებ (არასავალდებულო)"
            multiline
            rows={4}
            placeholder="ზოგადი ინფო შენ შესახებ"
            fullWidth={true}
          />
          <TextField
            id="standard-helperText"
            label="ელფოსტა"
            placeholder="anzor666@redberry.ge"
            helperText="უნდა მთავრდებოდეს @redberry.ge-თი"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
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
      {/* <form>
        <div className="row">
          <div className="col">
            <label htmlFor="firstname">სახელი</label>
            <input
              id="firstname"
              type="text"
              className="form-control"
              placeholder="სახელი"
            />
            <p>მინიმუმ 2 ასო ქართული ასოები</p>
          </div>
          <div className="col">
            <label htmlFor="lastname">გვარი</label>
            <input
              id="lastname"
              type="text"
              className="form-control"
              placeholder="გვარი"
            />
            <p>მინიმუმ 2 ასო ქართული ასოები</p>
          </div>
        </div>
      </form> */}
    </div>
  );
}

export default Form;
