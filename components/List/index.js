import { Square, List } from "./List.styled";
const ListItem = ({ children }) => {
  return (
    <List>
      <Square />
      <div> {children}</div>
    </List>
  );
};

export default ListItem;
