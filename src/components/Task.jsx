import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Task = ({ id, path }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="bg-red-200 m- w-1/3"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <img src={path} />
    </div>
  );
};
