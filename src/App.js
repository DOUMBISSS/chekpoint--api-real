import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllUsers } from './Redux/actions';
import './App.css';

function App() {
  const [userInput , setUserInput] = useState("");
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.userReducer.user);

  
  useEffect(() => {
    fetch('https://api.github.com/users/example')
    .then(response => response.json())
    .then(data => { dispatch(getAllUsers(data))
    })}, [])

  // const setData = ({name ,
  //   login ,
  //   following ,
  //   followers ,
  //   avatar_url, 
  //   public_repos 
  //                 }) => {
  //                       setName(name);
  //                       setFollowers(followers);
  //                       setFollowing(following);
  //                       setUsername(login);
  //                       setRepos(public_repos);
  //                       setAvatar(avatar_url)
  // };
  
  const handeSearch =(event) =>{
    setUserInput(event.target.value)
  };

  const handleSubmit = () =>{
    fetch(`https://api.github.com/users/${userInput}`)
    .then(response => response.json())
    .then(data => {
      dispatch (getAllUsers(data))
    })

  };




  return (
    <div className="container">
      <div className='container--box'>
          <div className='container--header'>
          <input type="text" placeholder='Github user' onChange={handeSearch} />
          <button onClick={handleSubmit}>Search</button>
          </div>
          <div className='content'>
            <div className='content--left'>
                <div className='content--left--profil'>
                    <img src={data.avatar_url} alt="" />
                </div>
            </div>
            <div className='content--right'>
               <div className='content--right--box--one'>
                  <div className='name'>
                  <h1>{data.name}</h1>
                  </div>
                  <div className='username'>
                  <h2>{data.login}</h2>
                  </div>
               </div>
               <div className='content--right--box--two'>
                 <div className='items' >
                 <h3 className='item'>{data.followers} followers</h3>
                  <h3 className='item'>{data.following} following</h3>
                  <h3 className='item'>{data.public_repos} repos</h3>
                 </div>
               </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
