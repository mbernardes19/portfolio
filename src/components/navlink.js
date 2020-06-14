import React from 'react';
import { Link } from 'gatsby';

export default function NavLink({ title, to }) {
    return (
        <div style={{ margin: 0 }}>
            <Link
                to={to}
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                {title}
            </Link>
      </div>
    );
}