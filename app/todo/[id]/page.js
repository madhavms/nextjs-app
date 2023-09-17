import Link from "next/link";

const TodoDetail = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todo = await response.json();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Todo Detail</h1>
      <p className="mb-2">
        <span className="font-bold">ID:</span> {todo.id}
      </p>
      <p className="mb-2">
        <span className="font-bold">Title:</span> {todo.title}
      </p>
      <div className="mb-2 flex flex-row gap-2">
        <span className="font-bold">Completed:</span>

        <p className={todo.completed ? "text-green-700" : "text-red-700"}>
          {todo.completed ? "Yes" : "No"}
        </p>
      </div>
      <Link href="/todo">
        <button className="bg-blue-800 p-2 text-white rounded-md">
          Back to Todo List
        </button>
      </Link>
    </div>
  );
};

export default TodoDetail;
