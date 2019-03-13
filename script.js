/* hello-wilder.js */

// Define some variables
let hey = prompt('Hey mon ami, t\'aime ça manger des patates ?');
switch (hey) {
    case 'oui':
        let message = '#';
        console.log(message);
        for (let i = 1; i <= 7; i++) {
            message = message + '#';
            console.log(message);
        }
        break;
    case 'non':
        alert('bah dégage !');
        break;
    default:
        alert('Je vous sens comme tiraillé');
}