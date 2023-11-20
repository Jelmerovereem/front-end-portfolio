import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';
import * as defaults from 'styles/defaults';

const Button = styled.a`
	font-size: ${props => props.$small ? "1.3em" : "2em"};
	cursor: pointer;
	text-decoration: none;
	color: grey;
	background: transparent;
	padding: ${defaults.buttonPadding};
	border-radius: 50px;
	border: 2px solid grey;
	transition: border .3s ease, color .3s ease;
	&:hover {
		color: ${colors.textColor};
		border: 2px solid ${colors.textColor};
	}
`

const SecondaryBtn = ({text, href, className, small}) => {
	return (
		<Button href={href} className={className} $small={small} >{text}</Button>
		)
}

export default SecondaryBtn;