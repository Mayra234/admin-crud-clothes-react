import './index.css';
import React from 'react';
import { Input } from '../../components/Input';
import { Password } from '../../components/Password';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Switch } from '../../components/Switch';
import { Button } from '../../components/Button';
import { IconButton } from '../../components/IconButton';

export const Login = () => {
  return (
    <div className="heder-login text-center">
      <h4>Iniciar Sesión</h4>
      <p>
        Ingrese su dirección de correo electrónico y contraseña para acceder al
        panel de administración.
      </p>
      <form action="">
        <div className="field">
          <Input
            label="Dirección de Email"
            type="email"
            placeholder="Introduce tu correo electrónico"
          />
        </div>
        <div className="field">
          <a href="" className="float">
            <small>¿Olvidaste la contraseña?</small>
          </a>
          <div className="watch-password">
            <Password
              label="Contraseña"
              placeholder="Introduce tu contraseña"
            />
            <div>
              <IconButton>
                <FontAwesomeIcon icon={faEyeSlash} />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="form-check">
            <Switch label="Recordar" />
          </div>
        </div>
        <div className="fiel text-center">
          <Button>Iniciar Sesión</Button>
        </div>
      </form>
    </div>
  );
};
