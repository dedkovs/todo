import styled, { StyledFunction } from 'styled-components';

interface Props {
	checked: boolean;
}

const todoItemContainer: StyledFunction<
	Props & React.HTMLProps<HTMLLabelElement>
> = styled.label;

export const TodoItemContainer = todoItemContainer`
	display: flex;
	margin: 20px 0;
	align-items: center;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	word-wrap: break-word;
	word-break: break-word;
	padding: 10px;
	background-color: white;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	border: 1px solid ${(props) =>
		props.checked ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
	border-radius: 10px;
	font-family: sans-serif;
	font-size: 1.2rem;
	opacity: ${(props) => (props.checked ? 0.3 : 1)}
`;
