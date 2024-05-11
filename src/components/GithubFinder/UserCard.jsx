/* eslint-disable react/prop-types */


export default function UserCard({user}) {

  const {avatar_url, created_at, followers, following, name, login, public_repos} = user;

  const formattedDate = new Date(created_at);

  return (
    <div className="card-container">
      <div>
        <img src={avatar_url} className="avatar" alt="User Avatar" />
      </div>
      <h2 className="name">
        <div>
          <a href={`https://github.com/${login}`}>{name || login}</a>
        </div>
        <p>User joined on {`${formattedDate.getDate()} ${formattedDate.toLocaleString('default', { month: 'long'} )} ${formattedDate.getFullYear()}`}</p>
      </h2>
      <div className="profile-info">
        <div>
          <p>followers </p>
          <p>{followers}</p>
        </div>
      </div>
      <div>
        <div>
          <p>following</p>
          <p>{following}</p>
        </div>
      </div>
      <div>
        <div>
          <p>public repos</p>
          <p>{public_repos}</p>
        </div>
      </div>
    </div>
  )
}