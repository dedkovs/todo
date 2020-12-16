import styled, { StyledFunction } from 'styled-components';
import { HiddenCheckbox } from './HiddenCheckbox';
import { Icon } from './Icon';

interface Props {
	checked: boolean;
}

const checkbox: StyledFunction<Props & React.HTMLProps<HTMLDivElement>> =
	styled.div;

export const StyledCheckbox = checkbox`
	display: inline-block;
	width: 25px;
	height: 25px;
	background: ${(props) => (props.checked ? '#88b8ff' : 'white')};
	
	border: ${(props) =>
		props.checked ? '1px solid transparent' : '1px solid grey'};
	border-radius: 5px;
	transition: all 150ms;

      ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }

      &:hover {
          background-color: ${(props) =>
						props.checked ? '#78a3e3' : '#ecf1f8'};
          cursor: pointer
          }
`;
