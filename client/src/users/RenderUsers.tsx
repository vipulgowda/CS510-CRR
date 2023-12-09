import React, { useState } from 'react';
import ListItem from '../common/ListItem';
import DeleteConfirmButton from '../common/DeleteConfirmButton';
import Button from '../common/Button';
import { User } from '../types';
import { api } from '../utilities/api';
import message from '../common/message';
import { mutate } from 'swr';
import Text from '../common/Text';
import useAppContext from '../utilities/use-app-context';

interface IRenderUsersProps {
  usersData: User[];
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export default function RenderUsers(props: IRenderUsersProps) {
  const { usersData, setEditUser } = props;
  const { currentUser } = useAppContext();
  const [toggling, setToggling] = useState(false);

  const users = (usersData || []).map((user: any) => ({
    ...user,
    key: user.id,
  }));

  const handleDelete = async (user: User) => {
    const json = await api.deleteUser(user.id);
    if (json.error) {
      return message.error('Delete Failed: ' + json.error);
    }
    mutate(users.filter((u: any) => u.id !== user.id));
  };

  const handleDisableToggle = async (user: any) => {
    setToggling(true);
    const json = await api.put(`/api/users/${user.id}`, {
      disabled: !user.disabled,
    });
    setToggling(false);
    if (json.error) {
      return message.error('Disable toggle failed: ' + json.error);
    }
    const mutatedUsers = users.map((u: any) => {
      if (u.id === user.id) {
        return json.data;
      }
      return u;
    });
    mutate(mutatedUsers);
  };

  const ActionsButton = (props: any) => {
    const {
      title,
      key,
      buttonAction,
      toggling = false,
      deleteAction = false,
      user = null,
    } = props;
    if (deleteAction) {
      return (
        <DeleteConfirmButton
          key={key}
          confirmMessage={`Delete ${user.email}?`}
          onConfirm={buttonAction}
          style={{ marginLeft: 8 }}
        >
          {title}
        </DeleteConfirmButton>
      );
    } else {
      return (
        <Button
          key={key}
          style={{ marginLeft: 8 }}
          onClick={buttonAction}
          disabled={toggling}
        >
          {title}
        </Button>
      );
    }
  };

  return users.map((user: any) => {
    const actions = [];
    if (currentUser && currentUser.id !== user.id) {
      actions.push(
        <ActionsButton
          title="Edit"
          key="edit"
          buttonAction={() => setEditUser(user)}
        />
      );
      actions.push(
        <ActionsButton
          title={user.disabled ? 'Enable' : 'Disable'}
          key="toggle-disable"
          buttonAction={() => handleDisableToggle(user)}
        />
      );
      actions.push(
        <ActionsButton
          title="Delete"
          key="delete"
          deleteAction={true}
          confirmMessage={`Delete ${user.email}?`}
          buttonAction={() => handleDelete(user)}
        />
      );
    }

    let additionalUserInfo = <em> </em>;
    if (user.disabled) {
      additionalUserInfo = <em> - disabled</em>;
    } else if (!user.signupAt) {
      additionalUserInfo = <em> - not signed up yet</em>;
    }

    return (
      <ListItem key={user.id}>
        <div style={{ flexGrow: 1, padding: 8 }}>
          {user.email}
          <br />
          <Text type="secondary">
            {user.role} {additionalUserInfo}
          </Text>
        </div>
        {actions}
      </ListItem>
    );
  });
}
