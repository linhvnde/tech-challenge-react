export default function Header() {
  function capitalize(str) {
    return str.toUpperCase();
  }
  return <header className="App-header">{capitalize("Hello World")}</header>;
}
