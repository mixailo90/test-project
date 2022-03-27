import * as Yup from 'yup';

const visitType = (form) => {
  if (form.type === 'text') {
    const schema = Yup.string();
    if (form.required) {
      return schema.required();
    }

    return schema;
  } else if (form.type === 'checkbox_single') {
    const schema = Yup.boolean();
    if (form.required) {
      return schema.required();
    }

    return schema;
  } else if (form.type === 'checkbox_multiple') {
    const schema = Yup.array().of(Yup.string());
    if (form.required) {
      return schema.required();
    }

    return schema;
  } else if (form.type === 'radio') {
    const schema = Yup.boolean();
    if (form.required) {
      return schema.required();
    }

    return schema;
  } else {
    const schema = Yup.string().oneOf(form.options.map((option) => option.value));
    if (form.required) {
      return schema.required();
    }

    return schema;
  }
};

export const emitValidationSchema = (jsonForms) => {
  return jsonForms.reduce((acc, form) => {
    return acc.concat(
      Yup.object({
        [form.key]: visitType(form)
      })
    );
  }, Yup.object());
};
