import React from "react";
import dayjs from "dayjs";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function Exp(props) {
  const [startValue, setStartValue] = React.useState(dayjs("2022-04-07"));
  const [endValue, setEndValue] = React.useState(dayjs("2022-04-07"));
  return (
    <div>
      {props.additionalExp && <Divider variant="fullwidth" component="div" />}
      <Box sx={{ mt: 5 }}>
        <Stack direction="column" spacing={5}>
          <TextField
            name="position"
            id="standard-helperText"
            label="თანამდებობა"
            placeholder="დეველოპერი, დიზაინერ, ა.შ"
            helperText="მინიმუმ 2 სიმბოლო"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            name="employee"
            id="standard-helperText"
            label="დამსაქმებელი"
            placeholder="დამსაქმებელი"
            helperText="მინიმუმ 2 სიმბოლო"
            variant="outlined"
            fullWidth={true}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={8}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="დაწყების რიცხვი"
                value={startValue}
                onChange={(newValue) => {
                  setStartValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField fullWidth={true} {...params} />
                )}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="დამთავრების რიცხვი"
                value={endValue}
                onChange={(newValue) => {
                  setEndValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField fullWidth={true} {...params} />
                )}
              />
            </LocalizationProvider>
          </Stack>
          <TextField
            name="description"
            id="outlined-multiline-static"
            label="აღწერა"
            multiline
            rows={4}
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            fullWidth={true}
          />
          <Divider variant="fullwidth" component="div" />
        </Stack>
      </Box>
    </div>
  );
}

export default Exp;
