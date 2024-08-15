import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";

interface LoginInput {
    email: string;
    password: string
}

function LoginForm() {
const {register, handleSubmit, formState: { errors }} = useForm<LoginInput>();

const onLogin: SubmitHandler<LoginInput> = (data) => {
 //API call goes here
}

  return (
    <>
      <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            *Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register('email', {required: "Email is required", minLength: 5, maxLength: 20})}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert"  className="text-red-500">{errors.email.message}</p>}
            {errors.email?.type === "minLength" && (<p role="alert"  className="text-red-500">Email must be at least 5 characters</p>)}
            {errors.email?.type === "maxLength" && (<p role="alert" className="text-red-500">Email must be not longer than 20 characters</p>)}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              *Password
            </label>
            <div className="text-sm">
              {/* <a href="/#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a> */}
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register('password', {required: "Password is required", minLength: 5, maxLength: 100})}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p role="alert" className="text-red-500">{errors.password.message}</p>}
            {errors.password?.type === "minLength" && (<p role="alert"  className="text-red-500">Password must be at least 5 characters</p>)}
            {errors.password?.type === "maxLength" && (<p role="alert" className="text-red-500">Password must be not longer than 100 characters</p>)}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
