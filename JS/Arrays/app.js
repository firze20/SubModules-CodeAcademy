let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//remove o ultimo index do array (Javascript)
secretMessage.pop();
//Ver o tamanho do array
console.log(secretMessage.length);
//adiciona 2 indexes no fim do array "to" e "Program"
secretMessage.push('to', 'Program');
//altera o valor do index 7 de easily para right
secretMessage[7] = 'right';
//remove o index 0 (o primeiro de todos)
secretMessage.shift();
//adiciona um novo index 0 com o valor "Programming"
secretMessage.unshift('Programming');
//altera o index 6 "get" para know e depois remove 5 indexes há sua frente
secretMessage.splice(6, 5, 'know');
//junta os dados do array numa string separando por " " 
console.log(secretMessage.join(' '));