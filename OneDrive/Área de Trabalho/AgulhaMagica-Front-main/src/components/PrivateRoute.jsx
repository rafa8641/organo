import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, allowedRoles = null }) => {
  const router = useRouter();
  const { user, checkAuthentication } = useAuth();
  const [authorizationChecked, setAuthorizationChecked] = useState(false);

  const authenticate = async () => {
    await checkAuthentication();
    setAuthorizationChecked(true);

    if (!user) {
      router.replace('/errorPage');
    } else if (allowedRoles && user.author_level !== allowedRoles) {
      router.replace('/errorPage');
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return authorizationChecked && user ? children : null;
};

export default PrivateRoute;
