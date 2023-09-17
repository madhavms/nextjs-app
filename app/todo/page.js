import React, { Suspense } from "react";
import TodoPage from "./TodoPage";
import FastLoadingComponent from "@/components/FastComponent";
import LoadingSkeleton from "./loading";

const Todo = () => {
  return (
    <div>
      <FastLoadingComponent />
      <Suspense fallback={<LoadingSkeleton />}>
        <TodoPage />
      </Suspense>
    </div>
  );
};

export default Todo;
