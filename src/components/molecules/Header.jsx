import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors'
//import * as defaults from 'styles/defaults';
//import Flex from 'components/defaultStyled/Flex';
import PrimaryBtn from 'components/atoms/PrimaryBtn';
import SecondaryBtn from 'components/atoms/SecondaryBtn';
import FrontImg from 'assets/img/front_profile.png';

const Container = styled.div`
	height: fit-content;
	padding: 200px 5%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${colors.bgLight};
	@media screen and (max-width: 1200px) {
		flex-direction: column-reverse;
		height: initial;
		padding: 80px 0;
		text-align: center;
	}
`

const Greeting = styled.p`
	font-size: 5vmin;
	color: ${colors.textColor};
	opacity: .6;
	margin: 0;
`

const Title = styled.h1`
	color: ${colors.textColor};
	font-size: 13vmin;
	line-height: /*130px*/ 1em;
	margin: 0;
	@media screen and (max-width: 768px) {
		
	}
`

const SubTitle = styled.p`
	color: ${colors.textColor};
	font-size: 4vmin;
	@media screen and (max-width: 480px) {
		font-size: 1.5em;
	}
`

const PurpleSpan = styled.span`
	color: ${colors.primary};
	transition: font-weight .2s ease;
	&:hover {
		font-weight: bold;
	}
`

const BtnsContainer = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 1200px) {
		justify-content: center;
	}
	@media screen and (max-width:  768px) {
		.secondaryBtn {
			display: none;
		}
	}
	.marginBtn {
		margin: 20px;
	}
`

const HeaderEl = () => {
	return (
		<Container>
			<div>
				<Greeting>
					Hello, I am
				</Greeting>
				<Title>
					Jelmer
					<br />
					Overeem
				</Title>
				<SubTitle>I am a <PurpleSpan>creative</PurpleSpan> front-end developer.</SubTitle>
				<BtnsContainer>
					<PrimaryBtn text="Contact me"  href="#contact" className="marginBtn" />
					<SecondaryBtn text="Portfolio" href="#projects" className="marginBtn secondaryBtn" />
				</BtnsContainer>
			</div>
			<img src={FrontImg} alt="" style={{ maxWidth: "80%" }} />
		</Container>
		)
}

export default HeaderEl;