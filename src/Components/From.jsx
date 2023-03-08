import React from 'react'
import { useFormik } from "formik"
import { SignUpSchema } from "../schemas"
const initialValues = {
    full_name: "",
    email: "",
    password: "",
    re_password: ""

}

function From() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values, action) => {
            console.log("values", values);
            console.log("touched", touched);
            action.resetForm();
        },
    });
    // hello
    console.log("errors", errors)
    return (
        <section class="text-gray-600 body-font">
            <form onSubmit={handleSubmit} class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div class="relative mb-4">
                        <label htmlFor="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                        <input value={values.full_name} onChange={handleChange} onBlur={handleBlur} type="text" id="full-name" name="full_name" placeholder='Full Name' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.full_name && touched.full_name ? <p className='text-red-600' >{errors.full_name}</p> : null}
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" name="email" placeholder='Email' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.email && touched.email ? <p className='text-red-600' >{errors.email}</p> : null}
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" type="password" id="password" name="password" placeholder='Password' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.password && touched.password ? <p className='text-red-600' >{errors.password}</p> : null}
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="re_password" class="leading-7 text-sm text-gray-600">Re-Enter Password</label>
                        <input value={values.re_password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" type="password" id="re_password" name="re_password" placeholder='reenter password' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {errors.re_password && touched.re_password ? <p className='text-red-600' >{errors.re_password}</p> : null}
                    </div>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </form>
        </section>
    )
}

export default From