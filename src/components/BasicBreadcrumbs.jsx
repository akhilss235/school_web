import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function BasicBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const linkStyle = {
    textDecoration: 'none',
    color: '#505050',
     fontSize: '',
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/Dashboard', style: linkStyle }}>
        School
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/Dashboard')}`;
          return (
            <Breadcrumb.Item key={to} linkAs={Link} linkProps={{ to, style: linkStyle }}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BasicBreadcrumbs;
