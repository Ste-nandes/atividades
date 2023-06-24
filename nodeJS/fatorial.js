/*
* 4. Faça um script com NodeJS que calcule o fatorial de um número;

!1 = 1
!2 = 2 * 1 = 2
!3 = 3 * 2 * 1 = 6
!4 = 4 * 3 * 2 * 1 = 24
!5 = 5 * 4 * 3 * 2 * 1 = 120
*/

var readLineSyinc = require('readLine-sync');

function fatorial(n) {
    if(n == 1) return 1;
    console.log('Fatorial de ' + n + " = " + n + " * !" + (n + - 1));
    return n * fatorial(n - 1);

    readLineSyinc.question('qual é o número? ');
    console.log(fatorial(1));
}