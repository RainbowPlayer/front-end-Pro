const yearOfBirthday = +prompt('Please enter your year of birthday');

if(!yearOfBirthday) {
  alert('Okey, without your birthday');
  const age = ('I dont know your age')
} else{
  const age = (`You are ${2023 - yearOfBirthday} years old`)
}

const city = prompt('Please enter your city');
if (!city){
  alert('Okey, without your city');
}

switch (city) {
	case 'Kyiv':
  	alert (`You live in a capitale of Ukraine. ${age}19`);
    break;
  case 'London':
  	alert (`You live in a capitale of Great Britain. ${age}`);
    break;
  case 'Washington':
  	alert (`You live in a capitale of USA. ${age}`);
    break;
    case null:
      alert (`I dont know your city ${age}`)
      break;
  default:
    alert (`You live in ${city}. ${age}`)
    break;
}

console.log (city)

// const sport = prompt('Plaese enter your sport')
// if (!sport) alert('Okey, without your sport')