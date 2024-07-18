type Props = {
  text: string;
  completed: boolean;
}

export function Todo(props: Props) {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom pb-1">
      <span>{props.text}</span>
      <div>
        <button className="btn btn-warning me-2">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
