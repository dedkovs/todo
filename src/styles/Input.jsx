import styled from 'styled-components';

export const Input = styled.input`
	display: block;
	margin: 0 auto;
	height: 40px;
	width: 90%;
	max-width: 400px;
	font-family: sans-serif;
	font-size: 1.5rem;
	padding: 0 10px;
	border-radius: 10px;
	border: 1px solid grey;
	outline: none;

	&:focus {
		box-shadow: 0 0 0 2px #88b8ff;
	}
`;
