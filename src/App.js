import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name , setName] = useState("");
  const [userName , setUsername] = useState("");
  const [followers , setFollowers] = useState("");
  const [following , setFollowing] = useState("");
  const [avatar , setAvatar] = useState("");
  const [repos , setRepos] = useState("");
  const [userInput , setUserInput] = useState("");
  // const [data , setData] = useState("");
  // const dispatch = useDispatch()
  // const users = useSelector(state => state.userReducer.users);

  
  useEffect(() => {
    fetch('https://api.github.com/users/example')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })

  }, [])

  const setData = ({name ,
    login ,
    following ,
    followers ,
    avatar_url, 
    public_repos 
                  }) => {
                        setName(name);
                        setFollowers(followers);
                        setFollowing(following);
                        setUsername(login);
                        setRepos(public_repos);
                        setAvatar(avatar_url)
  };
  
  const handeSearch =(event) =>{
    setUserInput(event.target.value)
  };

  const handleSubmit = () =>{
    fetch(`https://api.github.com/users/${userInput}`)
    .then(response => response.json())
    .then(data => {
      setData(data);
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
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className='content--right'>
               <div className='content--right--box--one'>
                  <div className='name'>
                  <h1>{name}</h1>
                  </div>
                  <div className='username'>
                  <h1>{userName}</h1>
                  </div>
               </div>
               <div className='content--right--box--two'>
                 <div className='items' >
                 <h3 className='item'>{followers} followers</h3>
                  <h3 className='item'>{following} following</h3>
                  <h3 className='item'>{repos}repos</h3>
                 </div>
               </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
