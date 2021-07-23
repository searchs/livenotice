export default function notice(props) {
  return (
    <li className="notice stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          name={props.name}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleNoticeCompleted(props.id)}
        />
        <label className="notice-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}
