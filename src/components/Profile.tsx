const Profile = () => {
  const user = {
    name: "КОтик",
    img: "https://mobimg.b-cdn.net/v3/fetch/2c/2c38ec7c72e3d0094f591d6f735a3b8e.jpeg",
  };
  return (
    <>
      <strong>{user.name}</strong>
      <img className="img" 
      src={user.img} 
      alt="Котик"
      style={{
        maxWidth: "200px",
        display: "block",
      }}
      ></img>
    </>
  );
};
export default Profile;