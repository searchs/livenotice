const Card = ({ title, completed, id, userId }) => {
  return (
    <div className='pa3 ma2 bg-light-gray shadow-5 br3 notice stack-small'>
      <div>
        <h2>
          <span>
            {' '}
            {userId} | {id}
          </span>{' '}
          | {title}
        </h2>
        <h6>Status: {completed} </h6>
      </div>
    </div>
  );
};

export default Card;
