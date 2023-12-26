import { registerUsername } from '@/actions/registerUsername';

import AuthComponent from '../_components/authPage';

export default function LoginPage() {
  return <AuthComponent type="login" serverAction={registerUsername} />;
}
