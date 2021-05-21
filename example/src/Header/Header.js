function Header(props) {
  return (
    <header>
      <h1>{props.data.sitename}</h1>
      <h2>{props.second_header}</h2>
      <Nav nav = {props.data.nav}/>
    </header>
  );
}

const styleNav = {'text-decoration' : 'none',
'list-style-type' : 'none',
'color' : 'grey',
}

function Nav(props) {
  let data = props.nav;
  const listItem = data.map(item => <li style={styleNav} key={item.link}><a style={styleNav} href={item.link}>{item.text}</a></li>);
  return (
    <nav>
      <ul >
        {listItem}
      </ul>
    </nav>
  );
}

export default Header;