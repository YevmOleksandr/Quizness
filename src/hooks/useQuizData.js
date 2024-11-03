import { useQuery } from '@tanstack/react-query';

import { auth , db as database } from '../firebase';


const fetchQuizzes = async () => {
    const snapshot = await database.collection('quizzes').get();
    return snapshot.docs.map((document_) => ({ id: document_.id, ...document_.data() }));
};

export const useQuizData = () => {
    return useQuery(['quizzes'], fetchQuizzes);
};
