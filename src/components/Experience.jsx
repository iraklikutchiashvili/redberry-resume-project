import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Exp from "./Exp";

function Experience(props) {
  const [extraExp, setExtraExp] = useState(false);
  function addExtraExp() {
    setExtraExp(true);
  }
  const { data, handleChange, setPage, currentPage } = props;
  function handleClick() {
    setPage(currentPage + 1);
  }
  return (
    <div>
      <Exp additionalExp={extraExp} />
      {extraExp && <Exp />}
      <Button
        onClick={addExtraExp}
        sx={{ mt: 5, opacity: "0.5" }}
        variant="contained"
      >
        მეტი გამოცდილების დამატება
      </Button>

      <Stack sx={{ mt: 10 }} direction="row" justifyContent="space-between">
        <Button
          onClick={() => {
            setPage(currentPage - 1);
          }}
          size="medium"
          sx={{ bgcolor: "#6B40E3" }}
          variant="contained"
        >
          უკან
        </Button>
        <Button
          onClick={handleClick}
          size="large"
          sx={{ bgcolor: "#6B40E3" }}
          variant="contained"
        >
          შემდეგი
        </Button>
      </Stack>
    </div>
  );
}

export default Experience;
