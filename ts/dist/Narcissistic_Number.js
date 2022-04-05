"use strict";
exports.__esModule = true;
exports.narcissistic = void 0;
/**
 * Нарциссическое число - это положительное число, представляющее собой сумму собственных цифр,
 *  каждая из которых возведена в степень числа * *  цифр в данной базе.
 *  В этом Ката мы ограничимся десятичной дробью (основание 10).
 *
 * Задача:
 * Ваш код должен возвращать значение true или false (не "true" и "false") в зависимости от того, является ли данное число нарциссическим
 * числом в базе 10. Это может быть правдой и ложью на вашем языке, например, PHP.
 * Проверка ошибок на наличие текстовых строк или других недопустимых входных данных не требуется, в функцию будут передаваться только
 * допустимые положительные ненулевые целые числа.
 */
function narcissistic(value) {
    function numArmstrong(value) {
        var toRet = 0;
        String(value)
            .split("")
            .forEach(function (el) {
            toRet += Math.pow(Number(el), value.toString().length);
            return toRet;
        });
        return toRet;
    }
    return numArmstrong(value) === value;
}
exports.narcissistic = narcissistic;
console.log(narcissistic(5));
