import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';
import AppStack from './AppStack';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext)

  return signed ? <AppStack /> : <AuthRoutes /> 

}

export default Routes;