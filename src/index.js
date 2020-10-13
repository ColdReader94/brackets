module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0 || str.length < 2) return false;
    else {
      for(let i = 0; i < bracketsConfig.length;) {
          let bracketsType = bracketsConfig[i].join('');
          if(str.includes(bracketsType )){
            str = str.replace(bracketsType, '');
            i = 0;
        } else {
            i++;
        }     
        }
        if(str.length) return false;
        else return true;
  }      
}
