import { TextField, InputAdornment } from '@mui/material';

const TextFieldWithIcon = ({ id, name,label, value, onChange, error, helperText, icon }) => {
  return (
    <TextField
      id = {id}
      name = {name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>,
      }}
      variant="outlined"
      margin='normal'
    />
    
  );
};

export default TextFieldWithIcon;
