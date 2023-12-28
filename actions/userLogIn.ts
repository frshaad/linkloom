'use server';

import { signIn } from 'next-auth/react';

import prisma from '@/lib/db';

export const userLogIn = async (formData: FormData) => {
  const inputEmail = formData.get('email') as string;
  const inputPassword = formData.get('password') as string;
  const signInData = await signIn('credentials', {
    email: inputEmail,
    password: inputPassword,
  });

  console.log(signInData);

  // try {
  //   const hashedPassword = await hash(inputPassword, 10);
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       email: inputEmail,
  //       hashedPassword,
  //     },
  //   });

  //   if (!user) {
  //     return null;
  //   }

  //   return user;
  // } catch (error) {
  //   throw new Error('Failed to log in!');
  // }
};
