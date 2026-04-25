import Header from './components/Header';
import Footer from './components/Footer';

import Main from './components/Main';
import SideBar from './components/SideBar';

import './App.css';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    const newState = [...users, user];
    setUsers(newState);
    console.log(newState);
  };
  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar users={users} />
        <Main addUser={addUser} />
      </div>
      <Footer />
    </>
  );
}

export default App;
