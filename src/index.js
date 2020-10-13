module.exports = function check(str, bracketsConfig) {
  //проверяем на четное количество символы (парные или нет) и на пустую строку
  if(str.length % 2 !== 0 || str.length < 2) return false;
    else {      
      for(let i = 0; i < bracketsConfig.length;) {
          //проверяем строку на наличие пары скобок первого типа из второго аргумента
          let bracketsType = bracketsConfig[i].join('');          
          if(str.includes(bracketsType )){
            //удаляем совпадения и дальше проверяем строку на наличие скобок этого же типа, обнуляя счетчик
            str = str.replace(bracketsType, '');
            i = 0;
            //если совпадений больше нет - переходим к следующему типу скобок
        } else {
            i++;
        }     
        }
        //если символы в строке остались - значит скобки закрыты неправильно
        if(str.length) return false;
        else return true;
  }      
}
