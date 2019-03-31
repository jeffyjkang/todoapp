import styled from "styled-components";

//colors
// primary 282c34
// accent1 626977
// accent2 626977 / todo background
// accent3 191f2b
// accent4 0f1726 /accent todo
// complementary 4e473a
// cacc1 b3a790
// cacc2 867b66
// cacc3 403622
// cacc4 382c13

// auth styles
export const AuthContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// homepage styles
export const HomeContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  color: white;
`;

// nav styles
export const NavConatiner = styled.div`
  background-color: #4e473a;
  min-height: 100vh;
  min-width: 10vw;
  padding: 2.5rem;
`;

// listview styles

export const ListViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// todo styles
export const TodoContainer = styled.div`
  background-color: #626977;
  min-height: 10rem;
  min-width: 25rem;
  text-align: center;
  line-height: 10rem;
  border: 1rem solid #0f1726;
  border-radius: 1rem;
  margin: 2.5rem;
`;

// todoview styles
export const TodoViewContainer = styled.div`
  border: 1rem solid #0f1726;
  margin: auto;
  border-radius: 1rem;
  padding: 2.5rem;
`;
