"use client";


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {cn} from "~/lib/utils";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {type SignupFormValues, signUpSchema} from "~/schemas/auth";
import {useRouter} from "next/navigation";
import {Button} from "~/components/ui/button";
import Link from "next/link";
import {signUp} from "~/actions/auth";
import {signIn} from "next-auth/react";



export function SignupForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const result = await signUp(data);
      if (!result.success) {
        setError(result.error ?? "An error occurred during signup");
        return;
      }

      const signUpResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signUpResult?.error) {
        setError("Account created but couldn't sign in automatically. Please try again.");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>
              Sign up
            </CardTitle>
            <CardDescription>
              Enter your email below to sign up to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                      <p className='text-sm text-red-500'>{errors.email.message}</p>
                  )}
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                  </div>
                  <Input
                      id='password'
                      type='password'
                      required
                      {...register("password")}
                  />
                  {errors.password && (
                      <p className='text-sm text-red-500'>
                        {errors.password?.message}
                      </p>
                  )}
                </div>

                {error && (
                    <p className='rounded-md bg-red-50 p-3 text-sm text-red-500'>
                      {error}
                    </p>
                )}

                <Button type='submit' className='w-full' disabled={isSubmitting}>
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                Already have an account?{" "}
                <Link href='/login' className='underline underline-offset-4'>
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  )
}