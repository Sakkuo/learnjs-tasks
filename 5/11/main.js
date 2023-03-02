// Создайте дату
let data = new Date(2012, 01, 20, 3, 12)

// alert (data)





// Покажите день недели
const getWeekDay = (data) => {
  let day = data.getDay()
  let arr = ['ВС','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return arr[day]
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getWeekDay(date) );        // нужно вывести "ВТ"




//День недели в европейской нумерации

const getLocalDay = (data) => {
  let day = data.getDay()
  if (day === 0) {
    day = 7
  } 
  return day
}

// console.log( getLocalDay(date) )





// Какой день месяца был много дней назад?




const getDateAgo = (date, days) => {
  return new Date (date.getFullYear(), date.getMonth(), date.getDate() - days)
}

let date2 = new Date(2015, 0, 2);

// console.log( getDateAgo(date2, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date2, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date2, 365) ); // 2, (2 Jan 2014)





// Последнее число месяца?

const getLastDayOfMonth = (year, month) => {
  let lastDay = 28
  let date;
  while (true) {
    lastDay += 1
    date = new Date(year, month, lastDay)
    if (date.getMonth() !== month) {
      date = new Date(year, month, lastDay - 1)
      break
    }
  }
  return date.getDate()
}

// console.log(getLastDayOfMonth(2012, 1))





// Сколько сегодня прошло секунд?

const getSecondsToday = () => {
  let date = new Date();
  console.log( date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() )
}

// getSecondsToday()






// Сколько секунд осталось до завтра?

const getSecondsToTomorrow = () => {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let totalSecondsToday = (hour * 60 + min) * 60 + sec;
  let totalSecondsInADay = 86400;

  console.log( totalSecondsInADay - totalSecondsToday )
}

// getSecondsToTomorrow()





