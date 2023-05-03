const number1 = Number(prompt('Please enter number1'));

if (isNaN(number1)) {
    alert('Not a number!!');
  } 

  else {
    const number2 = Number(prompt('Please enter number2'));

    if (isNaN(number2)) {
        alert('Not a number!!');

      } else {
        const number3 = Number(prompt('Please enter number3'));

        if (isNaN(number3)) {
            alert('Not a number!!');

          } else {
            const result = (number1 + number2 + number3) / 3;
            alert (result);1
          }
      }
  }

