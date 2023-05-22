import * as React from "react";
import {
  FormLabel,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { useContext } from "react";
import { AdvisorContext } from "../../context/AdvisorContext";

function Filter() {
  const { status, languages, handleStatusChange, handleLanguageChange } =
    useContext(AdvisorContext);

  return (
    <Box sx={{ display: "grid" }} data-testid="filter">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Status</FormLabel>
        <FormGroup>
          {Object.entries(status).map((stat) => {
            return (
              <FormControlLabel
                key={stat[0]}
                control={
                  <Checkbox
                    checked={stat[1]}
                    onChange={handleStatusChange}
                    name={stat[0]}
                  />
                }
                label={stat[0]}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <Divider />
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Language</FormLabel>
        <FormGroup>
          {Object.entries(languages).map((language, index) => {
            return (
              <FormControlLabel
                key={language[0]}
                control={
                  <Checkbox
                    checked={language[1]}
                    onChange={handleLanguageChange}
                    name={language[0]}
                  />
                }
                label={language[0]}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
export default React.memo(Filter);
