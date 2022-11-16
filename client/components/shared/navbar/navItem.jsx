const NavItem = ({item}) => {
  return <a href={`#${item}`}>{item}</a>;
};

export default NavItem;
