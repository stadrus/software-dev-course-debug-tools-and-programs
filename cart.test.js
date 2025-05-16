const cart  = require ('./cart');

describe('The addItem function', () => {
    let dummieCart = [];
    
    // EDGE CASES
    //An empty cart. 
    test('should return an error message when zero items are added to the cart.', () => {
        expect(cart.calculateTotal(dummieCart)).toBe([]);
    });
    //A cart with one item.
    test('should return an item and its quantity when added to cart', () => {
        expect(cart.addItem(cart,'banana', 2)).toEqual([{ item: 'banana', quantity: 2}]);
    });
    //A discountRate of 0 or 1.
    test('should return an error message when a negative quantity is added to the cart.', () => {
        expect(cart.applyDiscount(0, 1)).toBe("Error a negative quantity cannot be entered");
    });
});
