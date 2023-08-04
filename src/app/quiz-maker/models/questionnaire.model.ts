export class QuestionnaireModel {
    category: string;
    film: string;
    type: string;
    difficulty: string;
    question: string;
    incorrect_answers: string[];
    correct_answer: string;
    answers: AnswerModel[];
    selected: boolean;
    isSelectedAnswerCorrect: boolean;

    constructor() {

        this.category = '';
        this.film = '';
        this.type = '';
        this.difficulty = '';
        this.question = '';
        this.incorrect_answers = [];
        this.correct_answer = '';
        this.answers = [];
        this.selected = false;
        this.isSelectedAnswerCorrect = false;
    }
}

export class AnswerModel {
    answer: string;
    selectedAnswer?: boolean;
    constructor() {
        this.answer = '';
        this.selectedAnswer = false;
    }
}