import React, { useEffect } from 'react';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Controller, useController, useForm } from 'react-hook-form';
import { theme } from 'theme';
import { StyledBtnContain } from 'components/ukit/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactSchema } from './validation/contact';

function Contact() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      district: '',
      price: '',
    },
    resolver: yupResolver(ContactSchema),
  });

  const handleSunmit = (values) => {
    console.log('value', values, errors);
  };

  const districts = [
    { value: 'Quận 1', key: '1', id: Math.ceil(Math.random() * 9999) },
    { value: 'Quận 2', key: '2', id: Math.ceil(Math.random() * 9999) },
    { value: 'Quận 9', key: '9', id: Math.ceil(Math.random() * 9999) },
    { value: 'Quận Thủ Đức', key: 'TD', id: Math.ceil(Math.random() * 9999) },
    {
      value: 'Quận Bình Thạnh',
      key: 'BT',
      id: Math.ceil(Math.random() * 9999),
    },
  ];
  const prices = [
    { value: '1 - 2 triệu', key: '1', id: Math.ceil(Math.random() * 9999) },
    { value: '2 - 3 triệu', key: '2', id: Math.ceil(Math.random() * 9999) },
    { value: '3 - 4 triệu', key: '3', id: Math.ceil(Math.random() * 9999) },
    { value: '4 - 5 triệu', key: 'TD', id: Math.ceil(Math.random() * 9999) },
  ];
  console.log('errors', errors);
  // useEffect(() => {
  //   setTimeout(() => {
  //     debugger;
  //   }, 5000);
  // }, []);
  // .css-454srj-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline

  return (
    <Box
      sx={{
        margin: '20px 2rem 2rem 2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '700px',
      }}
    >
      <Box sx={{ width: '50%', marginRight: '2rem', height: '100%' }}>
        <img
          alt="form-left"
          src="/home/form-left.png"
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'space-between',
          height: '100%',
          marginTop: '40px',
        }}
      >
        <Box>
          <img alt="logo" src="/home/logo-city-houzing.png" />
          <Typography
            sx={{
              fontSize: '2.25rem',
              color: theme.palette.text.content,
              fontWeight: 600,
              lineHeight: '1.438rem',
              mt: '30px',
              mb: '50px',
            }}
          >
            HÃY ĐỂ CHÚNG TÔI GIÚP BẠN
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(handleSunmit)}>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                id="outlined-basic"
                label=""
                placeholder="* Họ và tên"
                variant="outlined"
                sx={{
                  '& > *': { color: `${theme.palette.text.title} !important` },
                  '& .Mui-focused fieldset': {
                    borderColor: `${theme.palette.text.title} !important`,
                  },
                  '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl fieldset':
                    { borderColor: `rgba(0, 0, 0, 0.23)` },
                  marginBottom: '1.125rem',
                }}
                fullWidth
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                id="outlined-basic"
                label=""
                placeholder="* Số điện thoại"
                variant="outlined"
                type="number"
                sx={{
                  '& > *': { color: `${theme.palette.text.title} !important` },
                  '& .Mui-focused fieldset': {
                    borderColor: `${theme.palette.text.title} !important`,
                  },
                  '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl fieldset':
                    { borderColor: `rgba(0, 0, 0, 0.23)` },
                  marginBottom: '1.125rem',
                }}
                onChange={onChange}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="district"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label=""
                fullWidth
                onChange={onChange}
                sx={{
                  color: `${theme.palette.text.title}`,
                  '& > *': { color: `${theme.palette.text.title} !important` },
                  '& .Mui-focused fieldset': {
                    borderColor: `${theme.palette.text.title} !important`,
                  },
                  marginBottom: '1.125rem',
                }}
              >
                <MenuItem disabled value="">
                  <em>* Quận 9</em>
                </MenuItem>
                {districts.map((district) => (
                  <MenuItem key={district.id} value={district.key}>
                    {district.value}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                defaultChecked={''}
                label=""
                defaultValue="1 - 2 triệu"
                fullWidth
                onChange={onChange}
                sx={{
                  color: `${theme.palette.text.title}`,
                  // borderColor: theme.palette.text.title,
                  // borderWidth: '1px',
                  // borderStyle: 'solid',
                  '& > *': { color: `${theme.palette.text.title} !important` },
                  // '&:hover input': {
                  //   borderColor: theme.palette.text.title,
                  //   borderWidth: '1px',
                  //   borderStyle: 'solid',
                  // },
                  marginBottom: '1.125rem',
                }}
              >
                <MenuItem disabled value="">
                  <em>* 1 - 2 triệu</em>
                </MenuItem>
                {prices.map((price) => (
                  <MenuItem key={price.id} value={price.key}>
                    {price.value}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <StyledBtnContain
            fontSize="1.25rem"
            fontWeight={600}
            lineheight="1.25rem"
            // style={{ marginRight: '9%' }}
            type="submit"
          >
            Send
          </StyledBtnContain>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
