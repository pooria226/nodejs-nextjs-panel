import joi from "joi";

const deleteValidator = (data) => {
  const schema = joi.object({
    id: joi.string().required().messages({
      "any.required": `شناسه یکتا اجباری است`,
    }),
  });
  const { error } = schema.validate(data, { abortEarly: false });
  const array = [];
  if (error) {
    error.details.map((item: unknown) => {
      //   array.push({
      //     key: item?.path[0],
      //     message: item?.message,
      //   });
    });
  }
  return array;
};

module.exports = {
  deleteValidator,
};
