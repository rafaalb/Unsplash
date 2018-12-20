import styled from 'styled-components';

const AgeTag = styled.span`
  background: ${props => props.theme.lighterBlue};
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 30px;
  right: -3px;
  @media screen and (max-width: 615px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 880px) {
    top: -3px;
  }
`;

export default AgeTag;
