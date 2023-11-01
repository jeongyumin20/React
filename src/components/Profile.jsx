// Profile.jsx (src)
import Avata from './Avata';

export default function Profile(props){ // 카멜케이스 
  return (
    <div className="profile">
      <Avata image={props.image} isNew={props.isNew}/>
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
}

// export default Profile;