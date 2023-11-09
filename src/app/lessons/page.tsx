import { listLessons } from "@/api/lesson";

export default async function Page({ params }: { params: { lesson_id: string } }) {
  const lessons = await listLessons();

  const handleLessonClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const id = ev.currentTarget.getAttribute('key');
    window.location.href = `/lessons/${id}`;
  };

  console.log({ lessons });
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {
          lessons.map((lesson: any) => {
            return (
              <div className="bg-white mb-4 max-w-3xl mx-auto rounded" key={lesson.lessonId}>
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
                <a href={'lessons/' + lesson.id}>
                  <div className="p-4 bg-indigo-500 text-center">
                    <span>Abrir lição</span>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}