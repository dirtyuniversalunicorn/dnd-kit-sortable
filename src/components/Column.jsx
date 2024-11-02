import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./Task";

const Column = ({ tasks }) => {
  return (
    <div className="flex flex-row justify-center gap-2">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} path={task.path} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
