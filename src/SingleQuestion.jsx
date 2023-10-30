// import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
     const isActive = id === activeId;
   // const [showInfo, setShowInfo] = useState(false)
  // console.log(showInfo);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => /*setShowInfo(!showInfo)*/ toggleQuestion(id)}>
          {/*showInfo*/ isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/*showInfo*/ isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion
