
function passwordIsValid() {

   let password = 'Nothilegugu123';

   try {
      
      // Trying conditions
      if (password == '') {
         throw('Password should exist!');
      }

      if (password.length <= 8) {
         throw('Password should have more 8 chars!');
      }

      if (password.match(/[a-z]/) == null) {
         throw('Password should contain small letters!');
      }

      if (password.match(/[A-Z]/) == null) {
         throw('Password should contain uppercase letters!');
      }

      if(password.match(/[0-9]/)== null) {
         throw("password should contain digits");
      }

      if(password.match(/[@,#,!,$,%,$,&,*]/) == null) {
         throw('password should have special charecters');
      }

      

      

   } catch(error) {
      console.log(error);
   }
   return "pass word is valid";
}
    
    console.log(passwordIsValid("password"));



    function passwordIsOk() {
   
   let password = 'Nothilegugu123@';

   if (password == '' && password.match(/[a-z]/) == null) {
      if (password.length > 8 || password.match(/[A-Z]/) == null || password.match(/[@,#,!,$,%,$,&,*]/) == null || password.match(/[0-9]/)== null) {
         return true;
      }
   }

   return false;
}



module.exports={
   passwordIsValid,
   passwordIsOk
}
