import React, { useState } from "react";
import Law from "./Law";
import HR from "./HR";
import AI from "./AI";
import Finance from "./Finance";
import FullStack from "./Fullstackcourse";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MyComponent = () => {
  const [value, setValue] = useState("");

  const handleClick = (event) => {
    const clickedValue = event; // Assuming the value is from the clicked element
    setValue(clickedValue);
  };

  return (
    <div>
      <FormControl sx={{ ml: 7, width: 300, mt: 3 }}>
        <Select style={{ borderRadius: 14, paddingLeft: 1 }}>
          <em>CAREER INTEREST</em>
          <MenuItem disabled value="">
            <em>CAREER INTEREST</em>
          </MenuItem>
          <MenuItem onClick={() => handleClick(<FullStack />)}>Full Stack Development</MenuItem> <MenuItem>HR</MenuItem> <MenuItem>Finance</MenuItem>{" "}
          <MenuItem onClick={() => handleClick(<Law />)}>Law</MenuItem>
          <MenuItem onClick={() => handleClick(<AI />)}>AI</MenuItem>
        </Select>
      </FormControl>
      <button onClick={() => handleClick(<Law />)}>Button 1</button> <button onClick={() => handleClick(<HR />)}>Button 2</button>{" "}
      <button onClick={() => handleClick(<AI />)}>Button 3</button> <button onClick={() => handleClick(<Finance />)}>Button 4</button>{" "}
      <button onClick={() => handleClick(<FullStack />)}>Button 5</button>
      <div>Clicked Value: {value}</div>
    </div>
  );
};

export default MyComponent;
