// let passwordIsOk = 'Nothilebb789#';
let password = require('../src/passwordCheck');

describe('password', function () {
    var passwordString = "Nothilebb789#";

    // it('should exist', function () {
    //     expect(passwordIsOk).not.toBeNull();
    // });

    // it('should have more than 8 charecters', function () {
    //     expect(passwordIsOk.length).toBeGreaterThan(8);
    // });

     it('should have uppercase', function () {
         expect(passwordIsOk.password(passwordString)).toMatch(/[A-Z]/);
    });

    it('should have lowercase', function () {
         expect(password.passwordIsOk(passwordString)).toMatch(/[a-z]/);
    });

    it('should have a digit', function () {
        expect(password.passwordIsOk(passwordString)).toMatch(/[0-9]/);
    });
    it('should have special charecter', function () {
        expect(password.specialcharecter(passwordString)).toMatch(/[%,&.@,*.#,!,$]/);
     });


});

