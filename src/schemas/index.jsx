import * as Yup from "yup"

export const SignUpSchema = Yup.object({
    full_name: Yup.string().min(2).max(25).required("Please enter valid name"),
    email: Yup.string().email().required("Please enter valid email"),
    password: Yup.string().min(6).max(25).required("Please enter valid password"),
    re_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Please enter valid name"),
});