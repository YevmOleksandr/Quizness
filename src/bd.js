const data = {
    users: [
        {
            id: 1,
            username: "1",
            password: "1"
        }
    ],
    quizzes: [
        {
            id: 1,
            title: "General Knowledge",
            questions: [
                {
                    questionId: 1,
                    questionText: "What is the capital of France?",
                    options: ["Paris", "London", "Rome", "Berlin"],
                    answer: "Paris"
                },
                {
                    questionId: 2,
                    questionText: "Which planet is known as the Red Planet?",
                    options: ["Earth", "Mars", "Jupiter", "Venus"],
                    answer: "Mars"
                },
                {
                    questionId: 3,
                    questionText: "What is the largest ocean on Earth?",
                    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    answer: "Pacific Ocean"
                }
            ]
        }
    ]
};

export default data;
