const util ={
    sum: (a,b)=> a+b,
    validateEmail : (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
}

export default util