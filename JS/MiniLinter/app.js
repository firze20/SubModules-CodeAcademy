let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//juntamos a string story ao array storyWords, removendo os espaços ''
let storyWords = story.split(' ');

//Array betterWords, filtrando os valores que estão contidos no array unecessaryWords (fora)
let betterWords = storyWords.filter(function(word) {
    return !unnecessaryWords.includes(word);

}); 

let reallyWord = 0;
let veryWord = 0;
let basicallyWord = 0;


//Quantas vezes usamos as palavras really, very e basically
for(let word in storyWords){
    if(storyWords[word] === 'really'){
        reallyWord += 1;
    }
    else if(storyWords[word] === 'very'){
        veryWord += 1;
    }
    else if(storyWords[word] === 'basically'){
        basicallyWord += 1;
    }
};


//Contar quantas sentences temos no texto, ! ou . 
let countSentences = 0;

for(let sentences in storyWords){
    if(storyWords[sentences].includes('!') || storyWords[sentences].includes('.')){
        countSentences += 1;
    }
};

console.log(`Total words count: ${storyWords.length}, really word count:${reallyWord}, very word count:${veryWord}, basically word count:${basicallyWord}\n And Sentences count:${countSentences}`);

//overused words, remove it everytime it appears

betterWords = betterWords.filter(function(word){
    return !overusedWords.includes(word);
});

//finding the word that appears the greatest number of times

const findRepetitiveWord = (arr) => {
    if(arr.length === 0){
        return 'Erro! este array não tem elementos!'
    }
    else {
        return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
    }
}   

//betterWords.forEach(word => console.log(word));

console.log(findRepetitiveWord(betterWords));



