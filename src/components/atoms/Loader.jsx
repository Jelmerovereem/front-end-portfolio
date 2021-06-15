import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';

const Container = styled.div`
	display: flex;

`

const Loader = styled.div`
	width: 30px;
	height: 30px;
	margin: 5px;
	border-radius: 50%;
	animation: load 2s infinite;
	:nth-child(2) {
		animation-delay: .5s;
	}
	:nth-child(3) {
		animation-delay: 1s;
	}
	@keyframes load {
		0% {
			transform: scale(1);
			background: grey;
		}

		50% {
			transform: scale(1.4);
			background: ${colors.primary};
		}

		100% {
			transform: scale(1);
			background: grey;
		}

	}
`

const LoaderEl = () => {
	return (
		<Container>
			<Loader></Loader>
			<Loader></Loader>
			<Loader></Loader>
		</Container>
		)
}

export default LoaderEl;