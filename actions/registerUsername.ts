'use server';

import { redirect } from 'next/navigation';

export async function registerUsername(formData: FormData) {
  const username = formData.get('username');

  if (username && username.toString().length !== 0) {
    redirect('/register?username=' + username);
  } else {
    redirect('/register');
  }
}
