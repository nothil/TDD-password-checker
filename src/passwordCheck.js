function passwordIsOk(password) {
    try {
        var charecters = /^(?=.*[0-9])/;
        if(password.match(charecters) == null) throw("Password must have at least one digit");
        
        return password;
    } catch (err) {
        return err;
    }
}


// function passwordIsOk(password) {
//     try {
//         var charecters = /^(?=.*[a-z])/;
//         if(password.match(charecters) == null) throw("Password must have lowercase");
        
//         return password;
//     } catch (err) {
//         return err;
//     }
// }


function specialcharecter(password) {
    try {
        var charecters = /^(?=.*[%,&.@,*.#,!,$])/;
        if(password.match(charecters) == null) throw("Password must have at least one digit");
        
        return password;
    } catch (err) {
        return err;
    }
}
// console.log(passwordIsOk('nsjdvsvd132'));


    
module.exports={
    passwordIsOk,
    specialcharecter
}
    