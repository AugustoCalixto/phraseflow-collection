'use client'
import { Lesson } from "@/types/lesson";
import { useState } from "react";

export default function Page() {
  const [lessonData, setLessonData] = useState<Lesson>({
    title: "",
    content: "",
    questions: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLessonData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    setLessonData((prevState) => {
      const questions = [...prevState.questions];
      questions[index] = {
        ...questions[index],
        [name]: value,
      };
      return {
        ...prevState,
        questions,
      };
    });
  };

  const handleAddQuestion = () => {
    setLessonData((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        {
          type: "",
          question: "",
          answer: "",
        },
      ],
    }));
  };

  const handleRemoveQuestion = (index: number) => {
    setLessonData((prevState) => {
      const questions = [...prevState.questions];
      questions.splice(index, 1);
      return {
        ...prevState,
        questions,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add the lesson to the list of lessons
    const lessons = JSON.parse(localStorage.getItem("lessons") || "[]");
    lessons.push(lessonData);
    localStorage.setItem("lessons", JSON.stringify(lessons));
    console.log({lessons});
    // Reset the form
    // setLessonData({
    //   title: "",
    //   content: "",
    //   questions: [],
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          name="title"
          value={lessonData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
          Content:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          name="content"
          value={lessonData.content}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="questions">
          Questions:
        </label>
        {lessonData.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="type"
              value={question.type}
              onChange={(event) => handleQuestionChange(event, index)}
            >
              <option value="">Select a type</option>
              <option value="translation">Translation</option>
              <option value="open question">Open question</option>
            </select>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              name="question"
              placeholder="Question"
              value={question.question}
              onChange={(event) => handleQuestionChange(event, index)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              name="answer"
              placeholder="Answer"
              value={question.answer}
              onChange={(event) => handleQuestionChange(event, index)}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleRemoveQuestion(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Lesson
        </button>
      </div>
    </form>
  );
}
