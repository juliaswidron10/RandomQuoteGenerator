function generateRandomNumber() {
    return Math.floor(Math.random() * 20)
  }

const randomQuote = {
    quotes: [ 'Every trash you can imagine is real.', 'Happiness is not something ready made. It comes from your neighbors trash.', 'Don’t be afraid to give up the good trash to go for the great trashcans.', 'Hustlers don’t sleep, they nap.','Some raccoons want it to happen, some wish it would happen, others make a mess.','Great things are done by a pack of raccoons washing their food','Keep your eyes on the stars, and your feet on the ground, and your hands full of fast foods', 'If opportunity doesn’t knock, scream very loud.','Work hard in silence, let your pile of trash be the noise.','Work hard, be kind, and trashy things will happen.', 'If you work on something a little bit every day, you end up with orgy that is massive.','In the middle of every difficulty lies a pile of tasty trash','Go the extra mile. It’s always more bitches there.','Wherever you go, go with all your trash','You can cry, scream, and bang your bitch in frustration but keep pushing forward. It’s worth it','Today is your opportunity to build the chaos you want.', 'Focus on being destructive instead of busy.','If you can dream it, you can break it.','You can eat anything you set your mind to.','You never know what you can eat until you try.'],
    authors: ['Pablo Trashcasso','Dalai Panda XIV', 'John D. Raccoonfeller', 'Unknown Motherfucker', 'Michael Raccoordan', 'Vincent Van Trash','Theodore Raccoonvelt', 'Kurt Coonbain','Trash Ocean','Conan OTrash','Kenneth Goldtrash','Bucket Einstein',' Dr. Wayne D. Trash', 'Ccoonfucius','Unknow Szop','Ken the Raccoon','Ccoon Ferriss','Walt Trashney','Benjamin Trashlin','William Ccoonbbett'],
    photos:['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10','Q11','Q12','Q13','Q14','Q15','Q16','Q17','Q18','Q19','Q20'],
}

const showQuote = function(){
    let number = generateRandomNumber();
    document.querySelector('#quote > img').src=`Images/${randomQuote.photos[number]}.png`;
    document.querySelector('#quote > blockquote').textContent = `"${randomQuote.quotes[number]}"`;
    document.querySelector('#quote > p').textContent = `"${randomQuote.authors[number]}"`;
}

document.querySelector("#next").addEventListener('click',showQuote);