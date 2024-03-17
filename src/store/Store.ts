import { makeObservable, observable } from "mobx";
import { Order } from "moduleTypes";
class store {
  orders: Order[] = [];
  resultPrice: number = 0;
  constructor() {
    makeObservable(this, {
      orders: observable,
      resultPrice: observable,
    });
  }
  setOrders(data: Order[]) {
    this.orders = data;
  }
  incrementPrice(data: number) {
    this.resultPrice += data;
  }
  decrementPrice(data: number) {
    if (this.resultPrice < 0) {
      this.resultPrice = 0;
    } else {
      this.resultPrice -= data;
    }
  }
  priceReset(){
    this.resultPrice = 0;
  }
}
export const myStore = new store();
