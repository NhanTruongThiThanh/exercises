
class User {
    constructor(userType) {
        this.id = userType.id;
        this.isEmployee = userType.isEmployee;
        this.isAffiliate = userType.isAffiliate;
        this.isCustomer = userType.isCustomer;
        this.registerDate = userType.registerDate;
        this.isNoneOfThem = userType.isNoneOfThem;
    }
}

export default User;

