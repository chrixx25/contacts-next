import * as yup from 'yup';

export const defaultFormValues = {
    userName: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    mobileNo: ''
};

export const schema = yup.object().shape({
    userName: yup.string().required('username is required.'),
    firstName: yup.string().required('first name is required.'),
    lastName: yup.string().required('last name is required.'),
    middleName: yup.string(),
    email: yup.string().email().required(),
    mobileNo: yup.string()
        .required('mobile no. is required.')
        .min(11, 'mobile no. must be 11 digits.')
        .max(11, 'mobile no. must be 11 digits.')
        .matches(/^(09)\d{9}$/, 'mobile no number is not valid')
}).required();