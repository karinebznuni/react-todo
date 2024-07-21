import { useState } from "react";

type Props = {
  text: string;
  completed: boolean;
  onDelete: () => void;
  id: number;
  onChecked: () => void;
  onEdit: (id: number, newText: string) => void;
};

export function Todo(props: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.onEdit(props.id, editText);
    setIsEditing(false);
  };
  const handleInputChange = (e: any) => {
    setEditText(e.target.value);
  };

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom pb-1">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={props.onChecked}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleInputChange}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <span>{props.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
        ) : (
          <button className="btn btn-warning me-2" onClick={handleEdit}>Edit</button>
        )}

        <button className="btn btn-danger" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
