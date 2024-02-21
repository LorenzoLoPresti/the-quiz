export const POINT_PER_QUESTION = 10;

export type QuestionType = {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
};

export const arrOfQuestions: QuestionType[] = [
  {
    id: 1,
    answers: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Jack Nicholson"],
    correctAnswer: "Marlon Brando",
    question: "Who played the iconic role of Vito Corleone in 'The Godfather'?",
  },
  {
    id: 2,
    answers: ["Titanic", "Avatar", "The Avengers", "Jurassic Park"],
    correctAnswer: "Avatar",
    question:
      "Which movie held the record for the highest-grossing film of all time before 'Avengers: Endgame'?",
  },
  {
    id: 3,
    answers: [
      "Christopher Nolan",
      "Quentin Tarantino",
      "Steven Spielberg",
      "Martin Scorsese",
    ],
    correctAnswer: "Steven Spielberg",
    question: "Who directed the blockbuster film 'Jurassic Park'?",
  },
  {
    id: 4,
    answers: ["Tom Hanks", "Johnny Depp", "Leonardo DiCaprio", "Brad Pitt"],
    correctAnswer: "Leonardo DiCaprio",
    question: "Who starred as Jack Dawson in the film 'Titanic'?",
  },
  {
    id: 5,
    answers: [
      "The Shawshank Redemption",
      "Pulp Fiction",
      "The Dark Knight",
      "Fight Club",
    ],
    correctAnswer: "The Shawshank Redemption",
    question:
      "Which movie is often regarded as the greatest film of all time by many cinephiles?",
  },
  {
    id: 6,
    answers: [
      "Gone with the Wind",
      "Casablanca",
      "Citizen Kane",
      "The Wizard of Oz",
    ],
    correctAnswer: "Citizen Kane",
    question:
      "Which classic film is often considered the greatest American film ever made?",
  },
  {
    id: 7,
    answers: [
      "Daniel Day-Lewis",
      "Sean Connery",
      "Anthony Hopkins",
      "Meryl Streep",
    ],
    correctAnswer: "Daniel Day-Lewis",
    question:
      "Who won the Academy Award for Best Actor for his role in 'Lincoln'?",
  },
  {
    id: 8,
    answers: ["The Matrix", "Inception", "Blade Runner", "The Terminator"],
    correctAnswer: "The Matrix",
    question:
      "Which film popularized the concept of 'bullet time' in action sequences?",
  },
  {
    id: 9,
    answers: [
      "Jaws",
      "E.T. the Extra-Terrestrial",
      "Close Encounters of the Third Kind",
      "Raiders of the Lost Ark",
    ],
    correctAnswer: "Jaws",
    question:
      "Which film was directed by Steven Spielberg and is known for its iconic shark theme music?",
  },
  {
    id: 10,
    answers: ["The Silence of the Lambs", "Se7en", "Zodiac", "Mystic River"],
    correctAnswer: "The Silence of the Lambs",
    question:
      "Which film features the character Hannibal Lecter, a brilliant but insane serial killer?",
  },
];
