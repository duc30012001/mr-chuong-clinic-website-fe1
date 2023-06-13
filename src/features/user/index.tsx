import { useAppSelector } from '../../app/hooks';
import { userSelector } from './userSlice';

function UserComponent() {
  const selectedUsers = useAppSelector(userSelector);
  console.log('selectedUsers:', selectedUsers);
  return <div>User</div>;
}

export default UserComponent;
