import React from 'react';
import Modal from '../../common/Modal';
import useAppContext from '../../utilities/use-app-context';
import Content from '../Content';

interface Props {
  visible: boolean;
  onClose: () => void;
}

function AboutModal({ visible, onClose }: Props) {
  const { version } = useAppContext();
  return (
    <>
      <Modal
        width={650}
        title="About SQLPad"
        visible={visible}
        onClose={onClose}
      >
        <Content version={version} />
      </Modal>
    </>
  );
}

export default React.memo(AboutModal);
