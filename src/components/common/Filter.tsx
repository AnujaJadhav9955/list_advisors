import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { AdvisorContext } from "../../context/AdvisorContext";

export default function Filter() {
  const { status, languages, handleChange, handleLanguageChange } =
    useContext(AdvisorContext);

  return (
    <Box sx={{ display: "grid" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Status</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={status.online}
                onChange={handleChange}
                name="online"
              />
            }
            label="Online"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={status.offline}
                onChange={handleChange}
                name="offline"
              />
            }
            label="Offline"
          />
        </FormGroup>
      </FormControl>
      <Divider />
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Language</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.german}
                onChange={handleLanguageChange}
                name="german"
              />
            }
            label="German"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.english}
                onChange={handleLanguageChange}
                name="english"
              />
            }
            label="English"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.spanish}
                onChange={handleLanguageChange}
                name="spanish"
              />
            }
            label="Spanish"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={languages.french}
                onChange={handleLanguageChange}
                name="french"
              />
            }
            label="French"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
