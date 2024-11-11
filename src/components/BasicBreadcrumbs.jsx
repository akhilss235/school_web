import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function BasicBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Handle special pathnames
  const pathName = pathnames.map((item) => item.replace(/%20/g, " "));

  const linkStyle = {
    textDecoration: "none",
    color: "#505050",
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/Dashboard", style: linkStyle }}
        >
          Dashboard
        </Breadcrumb.Item>
        {pathName.map((value, index) => {
          // Determine the path for special cases or build path normally
          let to;
          const currentPath = pathnames.slice(0, index + 1).join("/");
          if (value.toLowerCase() === "students") {
            to = "/Students List";
          } else if (value.toLowerCase() === "classes") {
            to = "/Classes/Class Rooms";
          } else if (value.toLowerCase() === "time tables") {
            to = "/Time Tables/Set Timing";
          } else {
            to = `/${currentPath}`;
          }

          return (
            <Breadcrumb.Item
              key={to}
              linkAs={Link}
              linkProps={{ to, style: linkStyle }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BasicBreadcrumbs;
