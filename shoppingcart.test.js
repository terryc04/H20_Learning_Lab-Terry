const {cashier} = require('./shoppingcart')

test('basecase', () => {
    expect(cashier([])).toBe(0);
});

test('case1', () => {
    expect(cashier(['meat'])).toBe(20.99);
});

test('case2', () => {
    expect(cashier(['meat', 'apple', 'bagOfChips'])).toBe(22.99);
});

