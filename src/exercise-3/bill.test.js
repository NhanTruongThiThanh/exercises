import Bill from './bill';
import User from './user';
import { GoodsType } from './good';
import data from '../json/ex-3.json';

describe('Test Excercise 3', () => {
  it('Should return right calcNetPaymentAmount, if have bill', () => {
    const bill = new Bill(data.goodsType, data.userType);
    const calcNetPaymentAmount = bill.calcNetPaymentAmount();
    const expected = 240;
    expect(calcNetPaymentAmount).toEqual(expected);
  });
  it('Should return right totalBill', () => {
    const bill = new Bill(data.goodsType, data.userType);
    const calcTotalBill = bill.calcTotalBill();
    const expected = 300;
    expect(calcTotalBill).toEqual(expected);
  });

  it('Should return right totalAmountDiscount', () => {
    const bill = new Bill(data.goodsType, data.userType);
    const calcTotalAmountDisCount = bill.calcTotalAmountDisCount();
    const expected = 200;
    expect(calcTotalAmountDisCount).toEqual(expected);
  });

  it('Should return right calcAmountDisCounted, discount 30% if user is an Employee', () => {
    const bill = new Bill(data.goodsType, data.userType);
    const calcAmountDisCounted = bill.calcAmountDisCounted();
    const expected = 60;
    expect(calcAmountDisCounted).toEqual(expected);
  });

  it('Should return right calcAmountDisCounted, discount 10% if user is an Affiliate', () => {
    data.userType = {
        "id": "001",
        "isEmployee": false,
        "isAffiliate": true,
        "isCustomer": false,
        "registerDate": "2016",
        "isNoneOfThem": false
    };
    const bill = new Bill(data.goodsType, data.userType);
    const calcAmountDisCounted = bill.calcAmountDisCounted();
    const expected = 20;
    expect(calcAmountDisCounted).toEqual(expected);
  });

  it('Should return right calcAmountDisCounted, discount 5% if user is a Customer on over 2 years', () => {
    data.userType = {
        "id": "001",
        "isEmployee": false,
        "isAffiliate": false,
        "isCustomer": true,
        "registerDate": "2016",
        "isNoneOfThem": false
    };
    const bill = new Bill(data.goodsType, data.userType);
    const calcAmountDisCounted = bill.calcAmountDisCounted();
    const expected = 10;
    expect(calcAmountDisCounted).toEqual(expected);
  });

  it('Should return right calcAmountDisCounted, not discount if user is a Customer under 2 years', () => {
    data.userType = {
        "id": "001",
        "isEmployee": false,
        "isAffiliate": false,
        "isCustomer": true,
        "registerDate": "2018",
        "isNoneOfThem": false
    };
    const bill = new Bill(data.goodsType, data.userType);
    const calcAmountDisCounted = bill.calcAmountDisCounted();
    const expected = 0;
    expect(calcAmountDisCounted).toEqual(expected);
  });

  it('Should return right calcAmountDisCounted, if user is a NonOfThem, and total totalAmountDiscounted >= 100', () => {
    data.userType = {
        "id": "001",
        "isEmployee": false,
        "isAffiliate": false,
        "isCustomer": false,
        "registerDate": "",
        "isNoneOfThem": true
    };
    const bill = new Bill(data.goodsType, data.userType);
    const calcAmountDisCounted = bill.calcAmountDisCounted();
    const expected = 10;
    expect(calcAmountDisCounted).toEqual(expected);
  });

})