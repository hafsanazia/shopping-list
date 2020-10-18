import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private carts = new BehaviorSubject<any>([]);
  sharedCart = this.carts.asObservable();

  constructor() { }

  addToCart(data: any) {
    this.carts.next(data)
  }
  
}