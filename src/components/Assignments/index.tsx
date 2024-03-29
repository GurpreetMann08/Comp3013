import React from "react";
import { AssignmentItem } from "../Assignment/AssignmentItem";
import { Assignment } from "../../App";
import styles from "./assignments.module.css";


interface AssignmentListProps {
  assignments: Assignment[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {assignments.length}</span>
        </div>
      </header>
      <div className={styles.list}>
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment.id}
            assignment={assignment}
            onDelete={() => {
              // Handle delete logic here
            }}
          />
        ))}
      </div>
    </section>
  );
}