import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { DraggableObject } from "./DraggableObject";

const DraggableArea = ({ tasks }) => {
  return (
    <div className="flex flex-wrap gap-2 bg-zinc-700 p-4 rounded">
      <SortableContext items={tasks} strategy={rectSortingStrategy}>
        {tasks.map((task) => (
          <DraggableObject id={task.id} path={task.path} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default DraggableArea;
