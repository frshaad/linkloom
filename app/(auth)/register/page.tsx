import { createUser } from '@/actions/createUser';

import AuthComponent from '../_components/authPage';

export default function SignUpPage() {
  return <AuthComponent type="signup" serverAction={createUser} />;
}
