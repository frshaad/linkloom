'use server';

import { redirect } from 'next/navigation';

export async function registerUsername(formData: FormData) {
  const username = formData.get('username');
  redirect('/register?username=' + username);
}
