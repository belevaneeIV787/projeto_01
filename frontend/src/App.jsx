import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form';
import Table from './components/Table';
import { Container } from './styles/Container';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const App = () => {

  const [users, setUsers] = React.useState([])

  const getUsers = async () => {
    try {                        //Axios vai armazenar o objeto json dentro da variável
      const response = await axios.get("http://localhost:3333")
      setUsers(response.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)))
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getUsers();
  })

  return (
    <>
      <Container>
        <Form />
        <Table users={users} />
      </Container>
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default App;