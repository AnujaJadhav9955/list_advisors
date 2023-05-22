import React from "react";
import { FormControl, InputLabel, Box, NativeSelect } from "@mui/material";
import { useContext } from "react";
import {
  AdvisorContext,
  AdvisorContextType,
} from "../../context/AdvisorContext";

const SortInput = () => {
  const { setSortBy } = useContext<AdvisorContextType>(AdvisorContext);

  return (
    <Box sx={{ padding: "40px 0 0 50px" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort By
        </InputLabel>
        <NativeSelect
          defaultValue={"none"}
          onChange={(event) => setSortBy(event.target.value)}
          sx={{ color: "white" }}
        >
          <option value={"all"}>All</option>
          <option value={"rating"}>Rating</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default React.memo(SortInput);
