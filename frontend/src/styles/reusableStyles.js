import styled from "styled-components";

//colors
// primary 282c34 /
// accent2 626977 / todo background
// accent1 464D59 /
// accent3 191f2b / input background
// accent4 0f1726 /accent todo
// complementary 4e473a
// cacc1 b3a790 / button text color
// cacc2 867b66
// cacc3 403622
// cacc4 382c13 / button bg

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
  background-color: #626977;
  border: 1rem solid #0f1726;
  margin: auto;
  border-radius: 1rem;
  padding: 2.5rem;
`;

// create todo view styles
export const CreateTodoContainer = styled.div`
  background-color: #626977;
  border: 1rem solid #0f1726;
  margin: auto;
  border-radius: 1rem;
  padding: 2.5rem;
`;

// input styles
export const InputContainer = styled.input`
  background-color: #191f2b;
  color: white;
  border-radius: 0.25rem;
  height: 2rem;
  width: 100%;
`;
// button styles
export const ButtonContainer = styled.button`
  background: #382c13;
  border-radius: 0.25rem;
  height: 2rem;
  font-size: 1.5rem;
  color: #b3a790;
`;

// edit todo view styles
export const EditTodoContainer = styled.div`
  background-color: #626977;
  border: 1rem solid #0f1726;
  margin: auto;
  border-radius: 1rem;
  padding: 2.5rem;
`;
