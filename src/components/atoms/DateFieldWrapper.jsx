import { LocalizationProvider, DateField } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputAdornment } from '@mui/material'

const DateFieldWrapper = ({ id, name, label, value, onChange, error, helperText, icon }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        id={id}
        name={name}
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
    </LocalizationProvider>
  );
};

export default DateFieldWrapper;
