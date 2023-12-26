import { registerUsername } from '@/actions/registerUsername';

import AuthComponent from '../_components/authPage';

export default function SignUpPage() {
  return <AuthComponent type="signup" serverAction={registerUsername} />;
}
