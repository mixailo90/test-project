import { Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import response from '../../../data/form-config.json';
import FormBuilder from '../components/FormBuilder';
import { emitValidationSchema } from '../components/FormValidation';

const extractInitialValues = (jsonForm) =>
  jsonForm.reduce((acc, curr) => {
    const ret = { ...acc };
    if (curr.type === 'text') {
      ret[curr.key] = curr.defaultValue ?? '';
    }

    if (curr.type === 'checkbox_single') {
      ret[curr.key] = curr.defaultValue ?? false;
    }

    if (curr.type === 'checkbox_multiple') {
      ret[curr.key] = curr.defaultValue ?? [];
    }

    if (curr.type === 'radio') {
      ret[curr.key] = curr.defaultValue;
    }

    if (curr.type === 'select') {
      ret[curr.key] = curr.defaultValue ?? '';
    }

    return ret;
  }, {});

const FormPage = () => {
  const formik = useFormik({
    initialValues: extractInitialValues(response),
    validationSchema: emitValidationSchema(response),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexFlow: 'column'
      }}
    >
      <Typography variant="h3" component="div">
        Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormBuilder formData={response} formik={formik} />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default FormPage;
