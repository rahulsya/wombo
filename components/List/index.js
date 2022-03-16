import { Square, List, Content } from "./List.styled";
const ListItem = ({ children }) => {
  return (
    <List>
      <Square />
      <Content>{children}</Content>
    </List>
  );
};

export default ListItem;
