// formas de pular linha com o templete literal usando a crase

let firstName = 'Joe'

const email = 'Hi Joe, \nThe meeting is confirmed! \nAndre'
console.log(email)

const email2 = 'Hi ' + firstName + ', \nThe meeting is confirmed! \nAndre'
console.log(email2)


//modelo com crase
const email3 = `Hi Joe, 
The meeting is confirmed! 
Andre`
console.log(email3)

const email4 = `Hi ${firstName}, 
The meeting is confirmed! 
Andre`
console.log(email4)
