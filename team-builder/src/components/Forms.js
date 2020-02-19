import React, { useState } from 'react';


function Forms(props) {

let [teamList, setTeamList] = useState({
    name: '',
    email: '',
    role: ''
})

const handleChanges = event => {
    setTeamList({ ...teamList, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addteammate(teamList); 
    setTeamList({   name: '',
                    email: '',
                    role: '' }); 
  };


  return (
    <form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
    <input required
      type="text"
      placeholder={`Enter your name`}
      id="name"
      name="name"
      value={teamList.name}
      onChange={handleChanges}
    />
    <br />
    <label htmlFor="email">Email</label>
    <input required
      id="email"
      name="email"
      placeholder="Enter your email"
      value={teamList.email}
      onChange={handleChanges}
    />
    <br />
    <label htmlFor="role">Role</label>
    <select required name='role' id="role" onChange={handleChanges}>
        <option defaultValue=''></option>
        <option value='Student'>Student</option>
        <option value="TL">Team Lead</option>
        <option value="SL">Section Lead</option>
        <option value="instructor">Instructor</option>
    </select>
    <br />
    <button type="submit">Add Team Member</button>
    <br />
  </form>
  );
}

export default Forms;
