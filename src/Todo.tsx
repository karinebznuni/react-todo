type Props = {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onChecked: () => void;
};

export function Todo(props: Props) {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom pb-1">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={props.onChecked}
      />
      <span>{props.text}</span>
      <div>
        <button className="btn btn-warning me-2">Edit</button>
        <button className="btn btn-danger" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
