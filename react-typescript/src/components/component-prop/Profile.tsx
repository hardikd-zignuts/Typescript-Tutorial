export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>User is {name} Profile</div>;
};

export default Profile;
