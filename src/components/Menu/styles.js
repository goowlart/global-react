import styled from 'styled-components';

export const Container = styled.div`
body {
  margin: 0;
}

ul {
  
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 15%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
 

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
}

li a.active {
  background-color: #4CAF50;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
button {
  position: absolute;
  right: 20px;
      width: 42px;
      border-radius: 18px;
      background: transparent;
      border: 0;
      cursor: pointer;
    }
`;
