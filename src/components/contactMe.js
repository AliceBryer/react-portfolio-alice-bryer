import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const contactMe = () => {
  // const [value, setValue] = React.useState("Controlled");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <div className="contact-me">
      <h2 className="contact-me-title">
        {" "}
        Want to contact me? Fill in the form below or you can reach me
        alicebryer123@gmail.com or my{" "}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/alicebryer123/"
          target="_blank"
        >
          {" "}
          linkedin
        </a>
      </h2>

      <Box
        className="form-container"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            defaultValue=""
            // onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            defaultValue=""
            // onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            maxRows={4}
            defaultValue=""
            // onChange={handleChange}
          />
        </div>
        <button className="submit-button"> Submit Message </button>
      </Box>
    </div>
  );
};
export default contactMe;
