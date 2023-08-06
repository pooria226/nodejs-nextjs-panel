import joi from "joi";

interface errors {
  key: unknown;
  message: string;
}

export const storeValidator = (data: unknown) => {
  const schema = joi.object({
    first_name: joi.string().messages({
      "string.empty": `Fristname must be a string of letters`,
      "string.base": `Fristname must be a string of letters`,
    }),
    last_name: joi.string().messages({
      "string.empty": `Lastname must be a string of letters`,
      "string.base": `Lastname must be a string of letters`,
    }),
    phone: joi.string().required().min(11).max(11).messages({
      "any.required": `Phone number is required`,
      "string.min": `The minimum character must be eleven digits`,
      "string.max": `The maximum number of characters must be eleven digits`,
    }),
    password: joi.string().required().messages({
      "any.required": `Password is required`,
    }),
    role: joi.string().messages({
      "any.required": `Validity level is mandatory`,
    }),
    avatar: joi.string().messages({
      "string.empty": `The user image must be a string of letters`,
    }),
    code_meli: joi.string().messages({
      "string.empty": `The national code must be a string of letters`,
    }),
    date_of_birth: joi.date().messages({
      "date.empty": `The date of birth must be a date`,
    }),
    isActive: joi.boolean(),
    isVerifyd: joi.boolean(),
  });
  const { error } = schema.validate(data, { abortEarly: false });
  const array: Array<errors> = [];
  if (error) {
    error.details.map((item, index) => {
      array.push({
        key: item.path[0],
        message: item.message,
      });
    });
  }
  return array;
};

export const deleteValidator = (data: unknown) => {
  const schema = joi.object({
    id: joi.string().required().messages({
      "any.required": `شناسه یکتا اجباری است`,
    }),
  });
  const { error } = schema.validate(data, { abortEarly: false });
  const array: Array<errors> = [];
  if (error) {
    error.details.map((item: any) => {
      array.push({
        key: item?.path[0],
        message: item?.message,
      });
    });
  }
  return array;
};

export const loginValidator = (data: unknown) => {
  const schema = joi.object({
    phone: joi.string().required().min(11).max(11).messages({
      "any.required": `Phone number is required`,
      "string.min": `The minimum character must be eleven digits`,
      "string.max": `The maximum number of characters must be eleven digits`,
    }),
    password: joi.string().required().messages({
      "any.required": `Password is required`,
    }),
  });
  const { error } = schema.validate(data, { abortEarly: false });
  const array: Array<errors> = [];
  if (error) {
    error.details.map((item, index) => {
      array.push({
        key: item.path[0],
        message: item.message,
      });
    });
  }
  return array;
};
