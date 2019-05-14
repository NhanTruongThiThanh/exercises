import GoodsType from './good';
import User from './user';
import { 
    default_discount,
    discount_employee,
    discount_affiliate,
    over_two_years,
    discount_over_two_years,
    bill_amount,
    discount_per_bill_amount
 } from './constant';

export class Bill {
    constructor(goodsType, userType) {
        this.goodsType = goodsType;
        this.userType = userType;
    }

    calcTotalBill() {
        let totalBill = 0;
        for (var i = 0; i < this.goodsType.length; i++) {
            totalBill += this.goodsType[i].price;
        }
        return totalBill;
    }

    calcTotalAmountDisCount() {
        let amountDiscount = 0;
        for (var i = 0; i < this.goodsType.length; i++) {
            if(!this.goodsType[i].isGrocery) {
                amountDiscount += this.goodsType[i].price;
            }
        }
        return amountDiscount;
    }

    calcAmountDisCounted() {
        let totalAmountDiscounted = this.calcTotalAmountDisCount();
        switch(true) {
            case this.userType.isEmployee:
                return totalAmountDiscounted * discount_employee;
            case this.userType.isAffiliate:
                return totalAmountDiscounted * discount_affiliate;
            case this.userType.isCustomer:
                const totalYears = new Date().getFullYear() - this.userType.registerDate;
                if( totalYears >= over_two_years ) {
                    return  totalAmountDiscounted * discount_over_two_years;
                } 
                else return default_discount;
            case this.userType.isNoneOfThem:
                if ( totalAmountDiscounted >= bill_amount) {
                    return Math.floor(totalAmountDiscounted / bill_amount) * discount_per_bill_amount;
                }
                else return default_discount;
        }
    }

    calcNetPaymentAmount() {
        return this.calcTotalBill() - this.calcAmountDisCounted();
    }
}

export default Bill;