import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';
import * as defaults from 'styles/defaults';

const Button = styled.a`
	font-size: ${props => props.$small ? "1.3em" : "2em"};
	cursor: pointer;
	text-decoration: none;
	color: white;
	background: ${colors.btnPrimary};
	padding: ${defaults.buttonPadding};
	border-radius: 50px;
	transition: background .3s ease;
	@media screen and (max-width: 768px) {
		font-size: 1.5em;
	}
	@media screen and (max-width:  480px) {
		font-size: 1em;
	}
	&:hover {
		background: ${colors.btnHover};
	}
`

const PrimaryBtn = ({text, href, className, newTab, small}) => {
	return (
		<Button href={href} className={className} target={newTab ? "_blank": "_self"} $small={small}>{text}</Button>
		)
}

export default PrimaryBtn;