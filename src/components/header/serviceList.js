import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: rgba(24,224,204);
`;

export const ServiceList = (props) => {
  const {children} = props;
  const ListItems = children.map((item,i) => <ListItem key={i}>{item}</ListItem>);
  return <List>{ListItems}</List>
};
