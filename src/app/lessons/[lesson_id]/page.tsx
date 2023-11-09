import { fetchLesson } from "@/api/lesson";

export default async function Page({ params }: { params: { lesson_id: string } }) {
  const lesson = await fetchLesson(+params.lesson_id);
  console.log({ lesson });
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
          <p className="text-gray-500 mb-8">{lesson.content}</p>
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div className="flex flex-col">
              <span className="text-gray-500">Criada em:</span>
              <span className="text-gray-900">{new Date(lesson.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Última Atualização:</span>
              <span className="text-gray-900">{new Date(lesson.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Questões</h2>
            <div className="space-y-8">
              {lesson.lessonQuestions.map((lessonQuestion: any) => (
                <div key={lessonQuestion.questionId} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">#{lessonQuestion.questionId}</h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500">Questão</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{lessonQuestion.question.question}</dd>
                      </div>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500">Resposta</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{lessonQuestion.question.answer}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}