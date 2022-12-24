const questions = [
  {
    // What year did Mariah Carey’s ‘All I Want For Christmas Is You’ come out?
    question:
      "In che anno è uscita 'All I Want For Christmas Is You' di Mariah Carey?",
    answers: [
      { answerText: "1992", isCorrect: false },
      { answerText: "1995", isCorrect: false },
      { answerText: "1994", isCorrect: true },
      { answerText: "1999", isCorrect: false },
    ],
  },
  {
    // In Home Alone, where are the Mcallisters going on holiday when they leave Kevin behind?
    question:
      "In 'Mamma, ho perso l'aereo' (che non puoi non aver visto ogni anno in questo periodo assieme ad 'Una poltrona per due'), dove va in vacanza la famiglia McCallister lasciando a casa Kevin?",
    answers: [
      { answerText: "Parigi", isCorrect: true },
      { answerText: "Toronto", isCorrect: false },
      { answerText: "Roma", isCorrect: false },
      { answerText: "Tokyo", isCorrect: false },
    ],
  },
  {
    // Which city has been donating Trafalgar Square’s Christmas tree to London every year since 1947?
    question:
      "Quale città dona a Londra (la tua città) ogni anno dal 1947 l'albero di Natale di Trafalgar Square?",
    answers: [
      { answerText: "Oslo", isCorrect: true },
      { answerText: "Toronto", isCorrect: false },
      { answerText: "Helsinki", isCorrect: false },
      { answerText: "Gerusalemme", isCorrect: false },
    ],
  },
  {
    //
    question:
      "Come si chiama il cane del Grinch (personaggio che adori ahaha)?",
    answers: [
      { answerText: "Pluto", isCorrect: false },
      { answerText: "Max", isCorrect: true },
      { answerText: "Rudolf", isCorrect: false },
      { answerText: "Chris", isCorrect: false },
    ],
  },
  {
    // What gift did Harry Potter receive from the Dursleys during his first Christmas at Hogwarts?
    question:
      "Che regalo riceve Harry Potter dai Dursleys durante il suo primo anno ad Hogwarts? (Se sbagli questa niente regalo... occhio eh)",
    answers: [
      { answerText: "Un libro", isCorrect: false },
      { answerText: "Il mantello dell'invisibilità", isCorrect: false },
      { answerText: "Un gufo", isCorrect: false },
      { answerText: "Una moneta da 50 pence", isCorrect: true },
    ],
  },
];

export const randQustions = questions.sort(() => Math.random() - 0.5);
