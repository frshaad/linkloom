import { userLogIn } from '@/actions/userLogIn';

import AuthComponent from '../_components/authPage';

export default function LoginPage() {
  return <AuthComponent type="login" />;
}
