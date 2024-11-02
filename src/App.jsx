import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import Column from "./components/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, path: "0c958dd299ab8d089de0b534c4ac0785-699x524.jpg" },
    { id: 2, path: "3f0fdcd43dc5ad25409f761fb9d15527-699x524.jpg" },
    { id: 3, path: "c01a73903e6fb1c52daba7641191d2ad-699x524.jpg" },
    { id: 4, path: "ee109a3b2bb2cef5b8c3efca324febc9-699x524.jpg" },
  ]);

  const getTaskPosition = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);
      return arrayMove(tasks, originalPosition, newPosition);
    });
  };

  //sensors needed for mobile and keyboard, in CSS you have to set touch-action: none!!!!
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="bg-blue-200 m-4">
      <h1 className="text-center text-3xl p-4 bg-slate-400 text-white">
        Playground
      </h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}
