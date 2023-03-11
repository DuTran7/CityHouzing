import * as yup from 'yup';

export const ContactSchema = yup
  .object({
    fullName: yup.string().required().typeError('Họ và tên chưa nhập'),
    phone: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('Số điện thoại không hợp lệ'),
    district: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('Quận chưa được chọn'),
    price: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('Giá chưa được chọn'),
  })
  .required();
