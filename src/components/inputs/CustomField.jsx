import {
  FormGroup,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { CustomFieldSelect, CustomLabel, CustomOutlinedInput } from '.';
import { DatePicker } from '@mui/x-date-pickers';
// import { CustomTextField } from './CustomTextField';

export const CustomField = ({ type, ...props }) => {
  const { label, textfield, select, textarea, date } = props;

  const defaultSx = {
    mb: "5px",
  };

  const defaultDate = {
    "& .MuiInputBase-input": {
      p: "10px",
    },
  };

  switch (type) {
    case "select":
      return (
        <FormGroup>
          {label && (
            <CustomLabel
              sx={{ ...defaultSx, ...label?.sx }}
              title={label?.title}
            />
          )}
          <CustomFieldSelect size="small" {...select} />
        </FormGroup>
      );
    case "textarea":
      return (
        <FormGroup>
          {label && (
            <CustomLabel
              sx={{ ...defaultSx, ...label?.sx }}
              title={label?.title}
            />
          )}
          <TextareaAutosize {...textarea} />;
        </FormGroup>
      );

    case "date":
      return (
        <FormGroup>
          {label && (
            <CustomLabel
              sx={{ ...defaultSx, ...label?.sx }}
              title={label?.title}
            />
          )}
          <DatePicker size="small" sx={{ ...defaultDate, ...date?.sx }} />
        </FormGroup>
      );
    case "auth":
      return (
        <CustomOutlinedInput {...textfield}/>
        // <CustomTextField label={label} error={textfield.error} {...textfield}/>
        // <FormGroup sx={{mb: 1}}>
        //   <Box 
        //     sx={{
        //       width: "100%",
        //       border: `1px solid ${textfield?.error ? 'red': ''}`,
        //       borderRadius: 1
        //     }}
        //   >
        //     {label && (
        //     <CustomLabel
        //       variant="subtitle2"
        //       sx={{ pt: 1, pl: 1.4, color: textfield?.error ? 'red': '', ...label?.sx }}
        //       title={label?.title}
        //     />
        //   )}
        //     <TextField
        //       size="small"
        //       sx={{
        //         width: "100%",
        //         "& .MuiOutlinedInput-root": {
        //           "& fieldset": {
        //             border: "none",
        //           },
        //         },
        //         "& .MuiOutlinedInput-input": {
        //           padding: '0em .9em .5em .9em !important',
        //         },
        //       }}
        //       {...textfield}
        //     />
        //   </Box>
        //   {
        //     textfield?.error && (
        //       <Typography variant="subtitle2" color={'red'} sx={{ml: 1}} >error en el correo electronico</Typography>
        //     ) 
        //   }
        // </FormGroup>
      );
    default:
      return (
        <FormGroup>
          {label && (
            <CustomLabel
              sx={{ ...defaultSx, ...label?.sx }}
              title={label?.title}
            />
          )}
          <TextField size="small" {...textfield} />
        </FormGroup>
      );
  }
};
