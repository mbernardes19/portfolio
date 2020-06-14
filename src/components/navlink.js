import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function NavLink({ title, to }) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [componentWidth, setComponentWidth] = useState("");
    const divContainer = React.createRef(null);

    useEffect(() => {
        setComponentWidth(divContainer.current.offsetWidth);
    }, [isMouseOver]);

    return (
        <div ref={divContainer} onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)} style={{ margin: 0 }}>
            <Link
                to={to}
                style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontSize: '20px',
                    fontFamily: 'Roboto, sans-serif'
                }}
            >
                {title}
            </Link>
            <UnderLine show={isMouseOver} width={componentWidth} />
      </div>
    );
}

const UnderLine = styled.div`
    opacity: ${props => props.show ? '1' : '0'};
    position: absolute;
    margin-top: ${props => props.show ? '3px' : '0px'};
    border-radius: 10px;
    background-color: ${props => props.theme.color2};
    width: ${props => props.width}px;
    height: 2px;
    transition: all .3s;
`;