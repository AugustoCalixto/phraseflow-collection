export async function fetchLesson(lesson_id: number) {
  let url = 'http://localhost:3001/lessons/info/'+lesson_id;
  let options = {method: 'GET'};

  const response = await fetch(url, options).then(res => res.json());
  return response;
}

export async function listLessons() {
  let url = 'http://localhost:3001/lessons'
  let options = {method: 'GET'};

  const response = await fetch(url, options).then(res => res.json());
  return response;
}