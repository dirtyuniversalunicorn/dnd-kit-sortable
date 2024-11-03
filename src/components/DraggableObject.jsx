import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Image } from "antd";
import { Button } from "antd/es/radio";
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";

export const DraggableObject = ({ id, path }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="rounded-lg flex flex-col"
    >
      <Image width={200} src={path} className="rounded" />
      <div className="grid grid-cols-2">
        <Button className="flex justify-center w-full bg-zinc-800">
          <DragOutlined className="text-white" />
        </Button>
        <Button className="flex justify-center w-full bg-zinc-800">
          <DeleteOutlined className="text-white" />
        </Button>
      </div>
    </div>
  );
};
