import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const InputField = ({
  label, value, setValue, formatValueFunc, updateValue,
}) => {
  const disabledState = !value.length > 0;
  const [disabled, setDisabled] = useState(disabledState);

  const onChange = (e) => {
    setDisabled(!e.target.value.length > 0);
    setValue(formatValueFunc(e.target.value));
  };

  const clearTextField = () => {
    setValue(formatValueFunc(''));
    if (updateValue) updateValue(formatValueFunc(''));
    setDisabled(true);
  };
  return (
    <TextField
      fullWidth
      sx={{ m: 1 }}
      label={label}
      variant="standard"
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={clearTextField}
              edge="end"
              disabled={disabled}
            >
              <CancelIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
