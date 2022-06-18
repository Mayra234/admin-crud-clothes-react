import React from 'react';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/TableBody';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableCell } from '../../components/TableCell';
import { TableRow } from '../../components/TableRow';

export const Materials = () => {
  return (
    <>
      <h4 className="form-element">Materiales</h4>
      <Card>
        <form className="materials-form">
          <div className="field">
            <Input
              label="Nombre"
              type="text"
              placeholder="Digita el nombre del material"
            />
          </div>
          <div className="field">
            <Button>Crear</Button>
          </div>
        </form>
        <div className="container-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Id</TableHeader>
                <TableHeader>Material</TableHeader>
                <TableHeader>Acciones</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
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
