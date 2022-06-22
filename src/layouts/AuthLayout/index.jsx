import './index.css';
import React from 'react';
import { Card } from '../../components/Card';

export const AuthLayout = ({ children }) => {
  return (
    <div className="auth-background">
      <Card>{children}</Card>
    </div>
  );
};
