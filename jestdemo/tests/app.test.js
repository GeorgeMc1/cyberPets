const app = require(`../app.js`);

describe(`MATHS TEST ONLY`, () => {



test(`should equal 5 when passed 2 and 3`, ( ) => { 
    //We make our assertions here.
    expect(app.add(2,3)).toBe(5);
   });

test(`should contain the word Stuart`, ( ) => { 

    //We make our assertions here. 
    expect(app.myArray).toContain(`Stuart`);
   });

});