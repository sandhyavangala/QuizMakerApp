export class CategoryModel {
    trivia_categories: trivia_categories[];
    constructor() {
        this.trivia_categories = [];
    }
}

export class trivia_categories {
    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = '';
    }
}