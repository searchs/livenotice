export default function notice(props) {
  return (
    <li className="notice stack-small">
      <div className="c-cb">
        <input id="notice-0" type="checkbox" defaultChecked={true} />
        <p className="notice-label" htmlFor="notice-0">
          {props.name}
        </p>
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
