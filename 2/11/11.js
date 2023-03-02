let nam = prompt('Кто там?')

if (nam == 'Админ') {
  let pass = prompt('пароль?')
  if (pass == 'Я главный') {
    alert('Здравствуйте!')
  } else if (!pass) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (!nam) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}