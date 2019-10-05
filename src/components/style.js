import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Header = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4a90e2;
  color: #fff;
  padding: 0 50px;
  margin: 0px auto;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-align: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      font-size: 20px;
      margin-left: 5px;
    }
  }
`;

export const PostHeaderDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
`;

export const SpanBold = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const P = styled.p`
  margin: 20px auto;
`;

export const PostBodyDiv = styled.div`
  hr {
    margin-bottom: 10px;
    border: 1px solid #eee;
  }

  img {
    width: 45px;
    height: 45px;
  }

  > div {
    flex-direction: row;
    display: flex;
    align-items: flex-start;
  }
`;

export const PostComment = styled.div`
  flex-direction: row;
  display: flex;
  background-color: #ddd;
  width: 100%;
  border-radius: 20px;
  padding: 12px;
  margin-left: 20px;

  span {
    font-weight: bold;
  }
`;
