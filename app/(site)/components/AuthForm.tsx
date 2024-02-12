"use client";

import Buttons from "@/app/components/Buttons";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios Register
    }

    if (variant === "LOGIN") {
      //Axios SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  };
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form
          className='space-y-6'
          onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id='name'
              label='Name'
              register={register}
              erros={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id='email'
            label='Email Adrress'
            type='email'
            register={register}
            erros={errors}
            disabled={isLoading}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            erros={errors}
            disabled={isLoading}
          />
          <div>
            <Buttons
              disabled={isLoading}
              fullWidth
              type='submit'>
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Buttons>
          </div>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white px-2 text-gray-500'>or Continue With</span>
              </div>
            </div>
            <div className='mt-6 flex gap-2'>
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("github")}
              />
            </div>
          </div>
          <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
            <div>{variant === "LOGIN" ? "New to Messenger?" : "Already have an account?"}</div>
            <div
              onClick={toggleVariant}
              className='underline cursor-pointer'>
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;