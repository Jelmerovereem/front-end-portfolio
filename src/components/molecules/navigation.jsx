import React from 'react';
import styled from 'styled-components';
import LinkEl from 'components/atoms/Link';
import * as colors from 'styles/colors';
import * as defaults from 'styles/defaults';

const NavTitle = styled.p`
	font-size: 2em;
	color: ${colors.textColor};
`

const Nav = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	background: ${colors.bgLight};
	z-index: 3;
	a {
		margin: 10px 20px;
		text-transform: uppercase;
		font-size: 1.2em;
	}
`

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - ${defaults.padding});
	margin: auto;
	border-bottom: 2px solid lightgrey;
	@media screen and (max-width: 768px) {
		justify-content: center;
		div {
			display: none;
		}
	}
`

const NavEl = () => {
	return (
		<Nav>
			<NavContainer>
				<NavTitle>Jelmer Overeem</NavTitle>
				<div>
					<LinkEl text="Home" href="/#" />
					<LinkEl text="About me" href="#about" />
					<LinkEl text="Portfolio" href="#projects" />
					<LinkEl text="Contact" href="#contact" />
				</div>
			</NavContainer>
		</Nav>
		)
}

export default NavEl;