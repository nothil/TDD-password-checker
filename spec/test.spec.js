 
 
let password = require('../src/passwordCheck');
   var passwordtext = 'Nothilegugu789#'
describe('passwordIsOk', function () {
   it('password should exist', function () {
      expect(password).not.toBeNull();
     });


    it('should have more than 8 charecters', function () {
        expect(password.length).toBeGreaterThan(8);
     });


    it('should have a digit', function () {
        expect(password).toMatch(/[0-9]/);
     });

     it('should have special charecter', function () {
        expect(password.passwordtext).toMatch(/[%,&,@,*,#,!,$]/);
     });


    it('should have uppercase', function () {
          expect(password).toMatch(/[A-Z]/);
     });

     it('should have lowercase', function () {
        expect(password.passwordIsOk).toMatch(/[a-z]/);
     });

    
    

});

