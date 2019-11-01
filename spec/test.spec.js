let password = 'Nothilebb789#';

describe('password', function () {
    it('should exist', function () {
        expect(passwordIsOk).not.toBeNull();
    });

    it('should have more than 8 charecters', function () {
        expect(passwordIsOk.length).toBeGreaterThan(8);
    });

    it('should have uppercase', function () {
        expect(passwordIsOk).toMatch(/[A-Z]/);
    });

    it('should have lowercase', function () {
        expect(passwordIsOk).toMatch(/[a-z]/);
    });

    it('should have a digit', function () {
        expect(passwordIsOk).toMatch(/[0-9]/);
    });
    it('should have special charecter', function () {
        expect(passwordIsOk).toMatch(/[%,&.@,*.#,!,$]/);
    });


});

