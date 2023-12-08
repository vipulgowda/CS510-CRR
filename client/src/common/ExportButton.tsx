import { MenuItem, MenuLink } from '@reach/menu-button';
import DownloadIcon from 'mdi-react/DownloadIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../utilities/use-app-context';
import IconMenu from './IconMenu';

type Ref = HTMLAnchorElement;

interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const NavigationLink = React.forwardRef<Ref, NavigationLinkProps>(
  (props, ref) => {
    return <Link {...props} innerRef={ref} />;
  }
);

function ExportButton({
  statementId,
  onSaveImageClick,
}: {
  statementId?: string;
  onSaveImageClick?: () => void;
}) {
  const { config } = useAppContext();

  if (!config || !statementId) {
    return null;
  }

  const { allowCsvDownload } = config;

  const items = [];

  if (onSaveImageClick) {
    items.push(
      <MenuItem key="png" onSelect={onSaveImageClick}>
        png
      </MenuItem>
    );
  }

  function createMenuLink(type: string) {
    return (
      <MenuLink
        key={type}
        as={NavigationLink}
        to={`/statement-results/${statementId}.${type}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {type}
      </MenuLink>
    );
  }

  if (allowCsvDownload) {
    items.push(createMenuLink('csv'));
    items.push(createMenuLink('xlsx'));
    items.push(createMenuLink('json'));
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <IconMenu icon={<DownloadIcon aria-label="Download" />}>{items}</IconMenu>
  );
}

ExportButton.propTypes = {
  links: PropTypes.object,
  onSaveImageClick: PropTypes.func,
};

export default ExportButton;
