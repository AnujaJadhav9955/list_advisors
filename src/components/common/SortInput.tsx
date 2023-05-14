import React from "react";
import { FormControl } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import { useContext } from "react";
import {
  AdvisorContext,
  AdvisorContextType,
} from "../../context/AdvisorContext";

const SortInput = () => {
  const { setSortBy } = useContext<AdvisorContextType>(AdvisorContext);

  return (
    <FormControl sx={{ m: 1, minWidth: 120, marginLeft: "auto" }}>
      <NativeSelect
        defaultValue={"none"}
        onChange={(event) => setSortBy(event.target.value)}
        sx={{ color: "white" }}
      >
        <option value="">Sort By</option>
        <option value={"rating"}>Top Rating</option>
      </NativeSelect>
    </FormControl>
  );
};

export default SortInput;
