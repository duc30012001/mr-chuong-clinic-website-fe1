import { useAppSelector } from '@/app/hooks';
import { userSelector } from './userSlice';

function User() {
  const selectedUsers = useAppSelector(userSelector);
  console.log('selectedUsers:', selectedUsers);
  return <div>User</div>;
}

export default User;
