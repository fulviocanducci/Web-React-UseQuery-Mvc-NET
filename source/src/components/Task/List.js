function List({ data }) {
  return (
    <ul className="list-group mt-3">
      {data &&
        data.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item.description}
          </li>
        ))}
    </ul>
  );
}

export default List;
