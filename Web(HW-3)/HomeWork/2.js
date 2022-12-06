// 1.Cоздать функцию greeting, которая принимает имя и выводит приветствие,
//  используя переданное имя, в консоль.
// 2. Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.

const userName = prompt(" Как тебя зовут?");
alert(`Приветики ${greeting()}!`);

function greeting() {
    let message = userName;
    return message
}
greeting();
