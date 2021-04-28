import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchAnime } from '../state/actions';

function Form(props) {
  const [form, setForm] = useState('');

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchAnime(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='form' onChange={handleChange} value={form} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default connect(null, { searchAnime })(Form);
