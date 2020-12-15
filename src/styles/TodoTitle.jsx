import styled, { StyledFunction } from 'styled-components';

interface Props {
	checked: boolean;
}

const todoTitle: StyledFunction<Props & React.HTMLProps<HTMLDivElement>> =
	styled.div;

export const TodoTitle = todoTitle`
	margin-left: 10px;
	text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')}
`;
