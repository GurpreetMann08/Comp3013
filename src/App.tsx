import React, { useState } from "react";
import { AssignmentList } from "./components/Assignments";
import { Header } from "./components/Header";

export interface Assignment {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const addAssignment = (newAssignment: Assignment) => {
    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
  };

  return (
    <>
      <Header onAddAssignment={addAssignment} />
      <AssignmentList assignments={assignments} />
    </>
  );
}

export default App;