
function Food() {
  const orange = 'Orange';
  const banana = 'Banana';
  return (
      <ul>
        <li>Apple</li>
        <li>{orange}</li>
        <li>{banana.toUpperCase()}</li>
      </ul>
  );
}

export default Food;