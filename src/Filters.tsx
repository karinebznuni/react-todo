type FilteredProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFilter: (status: any) => void;
};

export function Filters(props: FilteredProps) {
  return (
    <div className="row text-center justify-content-between">
      <div
        className="col-2 border border-primary"
        onClick={() => {
          props.onFilter("ALL");
        }}
      >
        All
      </div>
      <div
        className="col-2 border border-danger"
        onClick={() => {
        console.log("in progress")
          props.onFilter("IN_PROGRESS");
        }}
      >
        In progress
      </div>
      <div
        className="col-2 border border-success"
        onClick={() => {
          props.onFilter("COMPLETED");
        }}
      >
        Completed
      </div>
    </div>
  );
}
