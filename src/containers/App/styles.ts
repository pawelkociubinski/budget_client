import styled from "../../styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "sidebar" "content"
    "history"
    "footer"
`;

export const Header = styled.header`
  background-color: red;
  grid-area: header;
`;

export const Content = styled.div`
  background-color: yellow;
  grid-area: content;
`;

export const Sidebar = styled.aside`
  background-color: pink;
  grid-area: sidebar;
`;

export const History = styled.div`
  background-color: green;
  grid-area: history;
`;

export const Footer = styled.footer`
  background-color: purple;
  grid-area: footer;
`;
