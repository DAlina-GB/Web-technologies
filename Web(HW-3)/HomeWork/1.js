// 1. Необходимо пользователя попросить ввести температуру в градусах Цельсия 
// 2. Преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту 
// 3. Вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
//         Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
//         были получены ранее.
//         Формула перевода градусов Цельсия в градусы Фаренгейта:
//         градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
//         Примечания: Пользователь всегда вводит корректное число.
// 4. Значение после рассчетов округлить.

const cel = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
alert(`Цельсий: ${cel} Форенгейт: ${convertToF(cel).toFixed(2)}`);
function convertToF(celsius) {
    var fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}
