import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import message from '../common/message';
import Modal from '../common/Modal';
import { User } from '../types';
import { api } from '../utilities/api';
import EditUserForm from './EditUserForm';
import InviteUserForm from './InviteUserForm';
import RenderUsers from './RenderUsers';

function UserList() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const { data: usersData, error, mutate } = api.useUsers();

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const handleOnInvited = () => {
    mutate();
    setShowAddUser(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          style={{ width: 135 }}
          variant="primary"
          onClick={() => setShowAddUser(true)}
        >
          Add user
        </Button>
      </div>
      {usersData && (
        <RenderUsers usersData={usersData} setEditUser={setEditUser} />
      )}
      <Modal
        title="Add user"
        visible={showAddUser}
        width={'500px'}
        onClose={() => setShowAddUser(false)}
      >
        <InviteUserForm onInvited={handleOnInvited} />
      </Modal>

      <Modal
        title={editUser?.email || ''}
        visible={Boolean(editUser)}
        width={'500px'}
        onClose={() => {
          mutate();
          setEditUser(null);
        }}
      >
        <EditUserForm userId={editUser?.id} />
      </Modal>
    </>
  );
}

export default React.memo(UserList);
