import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

const initialForm = { name: '', email: '', mob: '' }
const BASE_URL = 'http://localhost:5000/api/v1'

function App() {
  const [form, setForm] = useState({ ...initialForm })
  const { name, email, mob, _id } = form

  const [list, setList] = useState([])

  useEffect(() => {
    getContactList()
  }, [])

  const getContactList = async () => {
    const { data: { data } } = await axios.get(`${BASE_URL}/contacts`)
    setList(data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (_id) {
      axios.patch(`${BASE_URL}/contacts/${_id}`, { ...form, _id: undefined })
        .then(({ data }) => {
          setList(prev => prev.map(p => p._id === _id ? { ...p, ...data.data } : p))
          setForm({ ...initialForm })
        })
    } else {
      axios.post(`${BASE_URL}/contacts`, { ...form })
        .then(({ data }) => {
          setList(prev => [...prev, data.data])
          setForm({ ...initialForm })
        })
    }
  }

  const handleDelete = ({ _id }) => {
    axios.delete(`${BASE_URL}/contacts/${_id}`, { ...form, _id: undefined })
      .then((resp) => {
        setList(prev => prev.filter(p => p._id !== _id))
        setForm({ ...initialForm })
      })
      .catch(({ response: { data: { message } } }) => console.log(message))
  }

  const handleUpdate = (item) => setForm({ ...item })


  return (
    <div className="App">
      <h1>Contact List</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} name="name" placeholder="name" onChange={handleChange} />
        <input value={email} name="email" placeholder="email" onChange={handleChange} />
        <input value={mob} name="mob" placeholder="mob" onChange={handleChange} />
        <button> {_id ? 'Update' : 'Add'}</button>
        {_id && <button onClick={() => setForm({ ...initialForm })}> Cancel </button>}
      </form>
      {list.map(l => (
        <div key={l._id} style={{ padding: '1rem' }} >
          <span className='list-span'> name: {l.name} </span>
          <span className='list-span'> email: {l.email} </span>
          <span className='list-span'> mob: {l.mob} </span>
          <span onClick={() => handleUpdate(l)} className='btn' style={{ backgroundColor: 'blue' }}> Edit </span>
          <span onClick={() => handleDelete(l)} className='btn' style={{ backgroundColor: 'red' }}> Delete </span>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
