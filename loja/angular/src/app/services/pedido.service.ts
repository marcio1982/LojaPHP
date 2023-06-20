import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[] = []; 
  constructor() { }

  getAll() {
    return this.pedidos;
  }
}
