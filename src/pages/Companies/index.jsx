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

export const Companies = () => {
  return (
    <>
      <h4 className="form-element">Compañias</h4>
      <Card>
        <form className="companies-form">
          <div className="field">
            <Input
              label=" Nombre"
              type="text"
              placeholder="Digita el nombre de la compañia"
            />
          </div>
          <div className="field">
            <Input
              label="Nit"
              type="number"
              placeholder="Digita el Nit de la compañia"
            />
          </div>
          <div className="field">
            <Button>Crear</Button>
          </div>
        </form>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>id</TableHeader>
                <TableHeader>Nombre</TableHeader>
                <TableHeader>Nit</TableHeader>
                <TableHeader>Acciones</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>vacio</TableCell>
                <TableCell>vacio</TableCell>
                <TableCell>vacio</TableCell>
                <TableCell>vacio</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
};
