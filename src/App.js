import Notice from "./components/Notice";

function App(props) {
  return (
    <div className="noticeapp stack-large">
      <h1>Notices</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-notice-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-notice-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="notice-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Notice name="Men of Valour" />
        <Notice name="Praise Night" />
        <Notice name="Young Bowling" />
        <Notice name="Sparkle Voices" />
      </ul>
    </div>
  );
}

export default App;
