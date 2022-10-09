import React from 'react';

const TodoForm = ({ handleAdd, handleKey }) => {
  const [text, setText] = React.useState('');
  const inputRef = React.useRef(null);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    handleAdd(text);
    setText('');
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className='formInput'
          value={text}
          onChange={handleChange}
          type='text'
          placeholder='Add Todo'
          onKeyDown={handleKey}
          autoFocus
        />
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default TodoForm;
