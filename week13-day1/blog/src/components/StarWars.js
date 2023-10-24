function StarWars(props) {
    const { charactersJson } = props;
    return (
        <div>
            {
                charactersJson.people.map(item => {
                    return (
                        <ul key={item.id}>
                            <li>{item.name}</li>
                            <li>{item.height}</li>
                            <li>{item.mass}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default StarWars;