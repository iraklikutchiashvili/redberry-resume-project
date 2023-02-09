import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Exp from "./Exp";

function Experience(props) {
  const [exp, setExp] = useState(false);
  function addExp() {
    setExp(true);
  }
  function handleClick() {
    props.setPage(props.currentPage + 1);
  }
  return (
    <div>
      <Exp additionalExp={exp} />
      {exp && <Exp />}
      <Button
        onClick={addExp}
        sx={{ mt: 5, opacity: "0.5" }}
        variant="contained"
      >
        მეტი გამოცდილების დამატება
      </Button>

      <Stack direction="row" justifyContent="space-between">
        <Button
          onClick={() => {
            props.setPage(props.currentPage - 1);
          }}
          size="medium"
          sx={{ mt: 10, bgcolor: "#6B40E3" }}
          variant="contained"
        >
          უკან
        </Button>
        <Button
          onClick={handleClick}
          size="large"
          sx={{ mt: 10, bgcolor: "#6B40E3" }}
          variant="contained"
        >
          შემდეგი
        </Button>
      </Stack>
    </div>
  );
}

export default Experience;
