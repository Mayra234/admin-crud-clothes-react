import React from 'react';
import './index.css';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/TableBody';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableCell } from '../../components/TableCell';
import { TableRow } from '../../components/TableRow';

export const Employees = () => {
  return (
    <>
      <h4 className="form-element">Empleados</h4>
      <Card>
        <form className="employees-form">
          <div className="field">
            <Input
              label="Primer nombre"
              type="text"
              placeholder=" Digita tu primer nombre"
            />
          </div>
          <div className="field">
            <Input
              label="Segundo nombre"
              type=" text"
              placeholder="Digita tu segundo nombre"
            />
          </div>
          <div className="field">
            <Input
              label="Apellido"
              type=" text"
              placeholder="Digita tu apellido"
            />
          </div>
          <div className="field">
            <Input label="Email" type=" email" placeholder="Digita tu email" />
          </div>
          <div className="field">
            <Input
              label="Contraseña"
              type=" password"
              placeholder="Digita tu contraseña"
            />
          </div>
          <div></div>
          <div className="field">
            <Button>Crear</Button>
          </div>
        </form>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>id</TableHeader>
                <TableHeader>Primer Nombre</TableHeader>
                <TableHeader>Segundo Nombre</TableHeader>
                <TableHeader>Apellido</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Acciones</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Vacío</TableCell>
                <TableCell>Vacío</TableCell>
                <TableCell>Vacío</TableCell>
                <TableCell>Vacío</TableCell>
                <TableCell>Vacío</TableCell>
                <TableCell>Vacío</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
};
