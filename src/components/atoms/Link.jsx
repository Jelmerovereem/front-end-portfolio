import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	color: black;
	text-decoration: none;
	&:hover {
		text-decoration: underline; 
	}
`

const LinkEl = ({text, href}) => {
	return (
			<Link href={href}>{text}</Link>
		)
}

export default LinkEl;