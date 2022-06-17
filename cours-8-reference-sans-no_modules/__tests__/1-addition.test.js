//const addition = require('../scripts/1-addition');
import { addition } from '../scripts/1-addition';


test('Additionne 2 nombres', function() {
    let a = 1,
        b = 2;
    expect(addition(a, b)).toBe(3);
});