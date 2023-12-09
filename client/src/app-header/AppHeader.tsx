import React from 'react';
import AppHeaderAdminSection from './AppHeaderAdminSection';
import AppMenu from './AppMenu';
import HistoryButton from './HistoryButton';
import Logo from './Logo';
import QueryListButton from './QueryListButton';
import ToolbarNewQueryButton from './ToolbarNewQueryButton';
import AppHeaderSpacer from './AppHeaderSpacer';
import AppHeaderUser from './AppHeaderUser';
import './AppHeader.css';

function Appheader(): React.JSX.Element {
  return (
    <div className="container">
      <div style={{ display: 'flex' }}>
        <Logo />
        <QueryListButton />
        <ToolbarNewQueryButton />
        <HistoryButton />
        <AppHeaderAdminSection />
        <AppHeaderSpacer grow />
        <AppHeaderUser />
        <AppMenu />
      </div>
    </div>
  );
}

export default React.memo(Appheader);
