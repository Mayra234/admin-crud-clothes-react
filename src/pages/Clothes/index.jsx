import React from 'react';
import './index.css';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TableHead } from '../../components/TableHead';
import { TableHeader } from '../../components/TableHeader';
import { TableRow } from '../../components/TableRow';
import { TableCell } from '../../components/TableCell';
import { TableBody } from '../../components/TableBody';

export const Clothes = () => {
  return (
    <>
      <h4 className="form-element">Prendas</h4>
      <Card>
        <form className="clothes-form">
          <div className="field">
            <Input
              label="Nombre"
              type="text"
              placeholder="Digita el nombre de la prenda"
            />
          </div>
          <div className="field">
            <Select label="Seleccione una compañía" options={[]} />
          </div>
          <div className="field">
            <Select label="Seleccione un material" options={[]} />
          </div>
          <div className="field">
            <Input
              label="Precio"
              type="number"
              placeholder="Digita el valor de la prenda"
            />
          </div>
          <div className="field">
            <Input
              label="Cantidad"
              type="number"
              placeholder="Digita la cantidad de prendas"
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
                <TableHeader>compañia</TableHeader>
                <TableHeader>material</TableHeader>
                <TableHeader>nombre</TableHeader>
                <TableHeader>precio</TableHeader>
                <TableHeader>cantidad</TableHeader>
                <TableHeader>acciones</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Vacio</TableCell>
                <TableCell>Vacio</TableCell>
                <TableCell>Vacio</TableCell>
                <TableCell>Vacio</TableCell>
                <TableCell>Vacio</TableCell>
                <TableCell>Vacio</TableCell>
                <TableCell>Vacio</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
};
