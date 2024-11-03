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
import DraggableArea from "./components/DraggableArea";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, path: "0c958dd299ab8d089de0b534c4ac0785-699x524.jpg" },
    { id: 2, path: "3f0fdcd43dc5ad25409f761fb9d15527-699x524.jpg" },
    { id: 3, path: "c01a73903e6fb1c52daba7641191d2ad-699x524.jpg" },
    { id: 4, path: "ee109a3b2bb2cef5b8c3efca324febc9-699x524.jpg" },
    { id: 5, path: "0c958dd299ab8d089de0b534c4ac0785-699x524.jpg" },
    { id: 6, path: "3f0fdcd43dc5ad25409f761fb9d15527-699x524.jpg" },
    { id: 7, path: "c01a73903e6fb1c52daba7641191d2ad-699x524.jpg" },
    { id: 8, path: "ee109a3b2bb2cef5b8c3efca324febc9-699x524.jpg" },
    { id: 9, path: "c01a73903e6fb1c52daba7641191d2ad-699x524.jpg" },
    { id: 10, path: "ee109a3b2bb2cef5b8c3efca324febc9-699x524.jpg" },
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
    <div className="flex flex-col ms-8">
      <h1 className="text-center text-3xl p-4 text-white">Exhibition</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <DraggableArea tasks={tasks} />
      </DndContext>
    </div>
  );
}
