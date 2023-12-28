'use server';

import { genSalt, hash } from 'bcrypt';

import prisma from '@/lib/db';

export const createUser = async (formData: FormData) => {
  const inputEmail = formData.get('email') as string;
  const inputPassword = formData.get('password') as string;

  try {
    const existedUser = await prisma.user.findUnique({
      where: {
        email: inputEmail,
      },
    });

    if (existedUser) {
      throw new Error('User email existed already!');
    }

    const hashedPassword = await hash(inputPassword, 10);

    const newUser = await prisma.user.create({
      data: {
        email: inputEmail,
        hashedPassword,
      },
    });

    return newUser;
  } catch (error) {
    throw new Error('Failed to create a new account!');
  }
};
