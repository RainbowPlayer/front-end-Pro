const age = +prompt('Please enter your age');


let city = prompt('Please enter your city');

switch (city) {
	case 'Kyiv':
  	alert ('You live in a capitale of Ukraine');
    break;
  case 'London':
  	alert ('You live in a capitale of Great Britain');
    break;
  case 'Washington':
  	alert ('You live in a capitale of USA');
    break;
    case (city):
      alert (`${'You live in'} ${city}`)
      break;
  default:
    alert (0)
    break;
}

console.log (city)