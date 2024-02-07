//import React from "react";
import { BsFillCheckCircleFill, BsTrash } from "react-icons/bs";
import { Assignment } from "../../App";
import styles from "./assignment.module.css";


interface AssignmentItemProps {
  assignment: Assignment;
  onDelete: () => void;
}

export function AssignmentItem({ assignment }: AssignmentItemProps) {
  return (
    <div>
      <div  className={styles.assignment}>
        <button className={styles.checkContainer}>
          <BsFillCheckCircleFill />
          <div />
        </button>
        <p>{assignment.title}</p>
      
      <button className={styles.deleteButton} >
        <BsTrash size={20} />
      </button>
      </div>
    </div>
  );
}
