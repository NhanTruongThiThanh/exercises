import Bill from './bill';
import User from './user';
import data from '../json/ex-3.json';
import { GoodsType } from './good';

function main() {
  const bill = new Bill(data.goodsType, data.userType);
  const netPaymentValue = bill.calcNetPaymentAmount();
  console.log(bill);
  console.log(netPaymentValue);
}

main();