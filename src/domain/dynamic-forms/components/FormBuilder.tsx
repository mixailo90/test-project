import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField
} from '@mui/material';

interface FormBuilderProps {
  formData: any;
  formik: any;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const FormBuilder: React.FC<FormBuilderProps> = ({ formData, formik }: FormBuilderProps) => {
  const builder = (fieldConfig: any) => {
    switch (fieldConfig.type) {
      case 'text':
        return (
          <TextField
            fullWidth
            id={fieldConfig.key}
            key={fieldConfig.key}
            name={fieldConfig.key}
            label={fieldConfig.label}
            value={formik.values[fieldConfig.key]}
            onChange={formik.handleChange}
            error={formik.touched[fieldConfig.key] && Boolean(formik.errors[fieldConfig.key])}
            helperText={formik.touched[fieldConfig.key] && formik.errors[fieldConfig.key]}
          />
        );
      case 'checkbox_single':
        return (
          <FormControlLabel
            id={fieldConfig.key}
            key={fieldConfig.key}
            name={fieldConfig.key}
            label={fieldConfig.label}
            onChange={formik.handleChange}
            control={<Switch />}
          />
        );
      case 'checkbox_multiple':
        return (
          <FormControl fullWidth key={fieldConfig.key}>
            <FormLabel id={`${fieldConfig.key}_label}`}>{fieldConfig.label}</FormLabel>
            <Select
              labelId={`${fieldConfig.key}_label}`}
              id={fieldConfig.key}
              key={fieldConfig.key}
              name={fieldConfig.key}
              multiple
              value={formik.values[fieldConfig.key]}
              onChange={(e: any) =>
                formik.setFieldValue(
                  fieldConfig.key,
                  typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value
                )
              }
              input={<OutlinedInput label={fieldConfig.label} />}
              renderValue={(selected: string[]) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {fieldConfig.options.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  <Checkbox checked={formik.values[fieldConfig.key].indexOf(option.value) > -1} />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case 'radio':
        return (
          <FormControl fullWidth key={fieldConfig.key} error={!!formik.errors[fieldConfig.key]}>
            <FormLabel id={`${fieldConfig.key}_radio`}>{fieldConfig.label}</FormLabel>
            <RadioGroup
              aria-labelledby={`${fieldConfig.key}_radio`}
              defaultChecked={false}
              onChange={(e: any) => formik.setFieldValue(fieldConfig.key, Boolean(e.target.value))}
              id={fieldConfig.key}
              name={fieldConfig.key}
            >
              {fieldConfig.options.map((option) => (
                <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
              ))}
            </RadioGroup>
            {formik.errors[fieldConfig.key] && <FormHelperText>{formik.errors[fieldConfig.key]}</FormHelperText>}
          </FormControl>
        );
      case 'select':
        return (
          <FormControl fullWidth key={fieldConfig.key}>
            <FormLabel id={`${fieldConfig.key}_select`}>{fieldConfig.label}</FormLabel>
            <Select
              labelId={`${fieldConfig.key}_select`}
              id={fieldConfig.key}
              value={formik.values[fieldConfig.key]}
              name={fieldConfig.key}
              label={fieldConfig.label}
              onChange={formik.handleChange}
            >
              {fieldConfig.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {formData &&
        formData.map((field: any) => {
          return builder(field);
        })}
    </>
  );
};

export default FormBuilder;
