import React from 'react';
import './App.css';
import { useState } from 'react';
import { Todo } from './Todo';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [title,setTitle]  = useState('');
  const [desc,setDesc]  = useState('');
  const [note,setNote] = useState([]);

  useEffect(() => {
    // getting data from the firebase firestore it will also create a new collection if not made earlier
    db.collection('Todo').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setNote(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data()})));  
      // console.log(snapshot.docs.map(doc => doc.data()))
    })

  }, []);


  // console.log(title)
  // console.log(desc)

  const addNote = (event) =>{
    // console.log('clicked');
    // setNote([...note,{'title':title,'desc':desc}]);

    db.collection('Todo').add({
      title: title,
      desc: desc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTitle('');
    setDesc('');
    // console.log(note)
    
  }

  return (
    <>
      <div className="container m-4">
        <div className="row">
          <div
            className="col-md-6 offset-md-3 alert alert-danger text-center"
            role="alert"
          >
            Notes App React + Firebase{" "}
            <span style={{ backgroungColor: "red" }}> 📓 </span>
          </div>
        </div>
      </div>
      <div className="container m-3">
        <div className="col-md-5 col-sm-5 offset-md-3">
          <div className="input-group flex-nowrap m-3">
            <span className="input-group-text" id="addon-wrapping">
              🖋
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="Title"
              value={title}
              aria-describedby="addon-wrapping"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="input-group flex-nowrap m-3">
            <span className="input-group-text" id="addon-wrapping">
              📔
            </span>
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              aria-label="Description"
              value={desc}
              aria-describedby="addon-wrapping"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-info m-2"
            type="submit"
            onClick={addNote}
            disabled={!title || !desc}
          >
            Add Note 🔥
          </button>
        </div>
      </div>
      <div className="row col-sm-10 col-md-10 offset-md-1">
        {note.map((n) => (
          // console.log(n.title);
          // console.log(n.desc);

          <Todo todo={n} />
        ))}
      </div>
    </>
  );
}

export default App;
