import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 0;
  color: #ffffff;
  font-size: 26px;
  font-weight: normal;
  flex-direction: column;
  max-width: 762px;
  margin: auto;

  @media (max-width: 600px) {
    max-width: 474px;
  }
`;

export const Item = styled.div`
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 1px;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.p`
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  line-height: normal;
  background: #303030;
  margin: 0;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
