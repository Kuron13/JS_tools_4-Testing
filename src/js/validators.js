export function isValidNumber(value) {
  let valueNum = value.replace(/[^\d]/g, '')
  valueNum = parseInt(valueNum)
  //console.log('Только цифры', valueNum)
    
  if (Number (value) == valueNum) {
    //console.log('были введены только цифры')
    return value.length >= 13 && value.length <= 19;
  } else {
    console.log('были введены недопустимые символы')
    return false;
  }
}

export function isValidCard(value) {
  const numberList = Array.from(value, Number)
  console.log('Значение:', value, '; Номер:', numberList)
  console.log(numberList)
  let sum = 0
  const parity = value.length % 2
  console.log('Остаток деления на 2', parity)

  for (let i = 0; i <= numberList.length - 1; i++) {
    if (i % 2 != parity) {
      //console.log('Чётная цифра: ', numberList[i])
      sum += numberList[i];
    } else if (numberList[i] > 4) {
      sum += 2 * numberList[i] - 9;
      //console.log('Нечётная цифра > 4: ', numberList[i])
    } else {
      //console.log('Нечётная цифра < 4: ', numberList[i])
      sum += 2 * numberList[i];
    };
  }
  
  console.log('Сумма: ', sum)
  //console.log('Сумма: ', sum, '; Контрольное число: ', numberList[numberList.length - 1])
  return sum % 10 == 0
  //return numberList.length == ((10 - (sum % 10)) % 10)
}

export function typeThisCard(value) {
  let type = 'Неизвестно';
  //console.log(value)
  if (['4026', '417500', '4508', '4844', '4913', '4917'].some(num => value.startsWith(num)) && value.length == 16) {
    type = 'Visa Electron';
  }
  else if (value.startsWith('4') && value.length >= 13 && value.length <= 19) {
    type = 'VISA';
  } else if (value.startsWith(22)) {
    if (parseInt(value.slice(0, 6)) < 222100) {
      type = 'Мир';
    }
  } else if (['51', '52', '53', '54', '55', '2'].some(num => value.startsWith(num)) && value.length == 16) {
    if (value.startsWith(2)) {
      if (parseInt(value.slice(0, 6)) >= 222100 && parseInt(value.slice(0, 6)) <= 272099) {
        type = 'MasterCard';
      }
    } else {
      type = 'MasterCard';
    };
  } else if (['34', '37'].some(num => value.startsWith(num)) && value.length == 15) {
    type = 'American Express (AMEX)';
  } else if (['300', '301', '302', '303', '304', '305'].some(num => value.startsWith(num)) && value.length == 14) {
    type = 'Diners Club - Carte Blanche';
  } else if (value.startsWith('36') && value.length == 14) {
    type = 'Diners Club - International';
  } else if (['6011', '622', '644', '645', '646', '647', '648', '649', '65'].some(num => value.startsWith(num)) && value.length >= 16 && value.length <= 19) {
    if (value.startsWith(622)) {
      if (parseInt(value.slice(2, 5)) >= 126 && parseInt(value.slice(2, 5)) <= 925) {
        type = 'Discover';
      }
    } else {
      type = 'Discover';
    };
  } else if (['62', '81'].some(num => value.startsWith(num)) && value.length >= 16 && value.length <= 19) {
    type = 'UnionPay';
  } else if (['637', '638', '639'].some(num => value.startsWith(num)) && value.length == 16) {
    type = 'InstaPayment';
  } else if (value.startsWith('35') && value.length >= 16 && value.length <= 19) {
    if (parseInt(value.slice(2, 4)) >= 28 && parseInt(value.slice(2, 4)) <= 89) {
      type = 'JCB';
    };
  } else if (['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'].some(num => value.startsWith(num)) && value.length >= 16 && value.length <= 19) {
    type = 'Maestro';
  }
  return type;
}