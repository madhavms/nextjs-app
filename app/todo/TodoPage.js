import Link from "next/link";

const TodoPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    next: { revalidate: 5 },
  });
  console.log("fetching data!");
  const todosData = await response.json();

  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-4xl">Next Todos:</h1>
      <ul className="list-disc">
        {todosData.map((todo) => (
          <li className="text-lg cursor-pointer hover:text-blue-800 pl-4" key={todo.id}>
            <Link href={`/todo/${todo.id}`} key={todo.id}>
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
