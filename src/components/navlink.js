import React, { useState, useEffect } from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from 'styled-components';

export default function NavLink({ title, to }) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [componentWidth, setComponentWidth] = useState("");
    const divContainer = React.createRef(null);

    useEffect(() => {
        setComponentWidth(divContainer.current.offsetWidth);
    }, [isMouseOver]);

    return (
        <div ref={divContainer} onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)} style={{ margin: 0, fontSize: '1.1rem' }}>
            <AnchorLink to={to}> {title} </AnchorLink>
            <UnderLine show={isMouseOver} width={componentWidth} />
      </div>
    );
}

const UnderLine = styled.div`
    opacity: ${props => props.show ? '1' : '0'};
    position: absolute;
    margin-top: ${props => props.show ? '3px' : '0px'};
    border-radius: 10px;
    background-color: ${props => props.theme.accentColor};
    width: ${props => props.width}px;
    height: 2px;
    transition: all .3s;
`;