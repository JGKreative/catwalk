import React, { useState } from 'react';
import { submitNewQA } from './ApiController';

const NewQAForm = ({
  parentId, parentType, closeOnSubmit, updateQuestions,
}) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (setFunc, event) => {
    setFunc(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log('remember to create error handling for me for when submitting new q/a!!!');
    submitNewQA(parentType, newQuestion, nickname, email, parentId, updateQuestions);
    setNewQuestion('');
    setNickname('');
    setEmail('');
    closeOnSubmit();
  };

  const displayType = () => {
    if (parentType === "answers") {
      return 'Your Answer: ';
    }
    if (parentType === "questions") {
      return 'Your Question: ';
    }
  };

  return (
    <form id="askQuestion" onSubmit={submitForm}>
      {displayType()}
      <br />
      <input id="newQBody" value={newQuestion} onChange={(event) => { handleChange(setNewQuestion, event); }} required type="text" maxLength="1000" placeholder="Example: Why did you like it or not?" />
      <br />
      What is your nickname
      <br />
      <input id="newQNickname" value={nickname} onChange={(event) => { handleChange(setNickname, event); }} required type="text" maxLength="60" placeholder="jack543!" />
      <br />
      For privacy reasons, do not use your full name or email address
      <br />
      Your email
      <br />
      <input id="newQEmail" value={email} onChange={(event) => { handleChange(setEmail, event); }} required type="email" maxLength="60" placeholder="jack@email.com" />
      <br />
      For authentication reasons, you will not be emailed
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewQAForm;
