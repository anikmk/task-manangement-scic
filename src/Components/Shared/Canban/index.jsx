import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Card from "../../Card";

const Kanban = () => {
    const [drags, setDrags] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/drag')
            .then(res => res.json())
            .then(data => {
                setDrags(data);
            });
    }, []);

    const onDragEnd = (result) => {
        console.log(result);
        // Implement logic for onDragEnd if needed
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-5 justify-center items-start text-white p-7">
                {drags.map((drag) => (
                    <Droppable key={drag._id} droppableId={drag._id}>
                        {(provided) => (
                            <div
                                className=""
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <div className="w-[300px] p-8 rounded bg-green-600 text-center font-bold text-xl">
                                    {drag.titles}
                                </div>
                                <div className="bg-black text-center p-6">
                                    {drag.tasks &&
                                    Array.isArray(drag.tasks) ? (
                                        drag.tasks.map((task, index) => (
                                            <Draggable
                                                key={task._id}
                                                draggableId={task._id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            opacity: snapshot.isDragging
                                                                ? '0.5'
                                                                : '1',
                                                        }}
                                                    >
                                                        <Card>
                                                            {task.title}
                                                        </Card>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))
                                    ) : (
                                        <p>No tasks available</p>
                                    )}
                                </div>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default Kanban;
