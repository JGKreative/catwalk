import React, { useState } from 'react';

const NewQAForm = ({parentId, parentType, closeOnSubmit }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (setFunc, event) => {
    setFunc(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(`eventually I will submit type ${parentType} and id ${parentId} to the API`);
    console.log('remember to create error handling for me!!!');
    console.log('you can send my data from state:', newQuestion, nickname, email);
    setNewQuestion('');
    setNickname('');
    setEmail('');
    closeOnSubmit();
  };

  return (
    <form id="askQuestion" onSubmit={submitForm}>
      Your
      {parentType}
      <br />
      <input id="newQBody" value={newQuestion} onChange={(event) => { handleChange(setNewQuestion, event); }} maxLength="1000" placeholder="Example: Why did you like it or not?" />
      <br />
      What is your nickname
      <br />
      <input id="newQNickname" value={nickname} onChange={(event) => { handleChange(setNickname, event); }} maxLength="60" placeholder="jack543!" />
      <br />
      For privacy reasons, do not use your full name or email address
      <br />
      Your email
      <br />
      <input id="newQEmail" value={email} onChange={(event) => { handleChange(setEmail, event); }} maxLength="60" placeholder="jack@email.com" />
      <br />
      For authentication reasons, you will not be emailed
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewQAForm;
