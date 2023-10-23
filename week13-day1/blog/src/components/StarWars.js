function StarWars(){
    const charactersJson = {
        "people": [
            {
                "id": "1",
                "name": "Luke Skywalker",
                "height": "172",
                "mass": "77",
                "hair_color": "blond",
            },
            {
                "id": "2",
                "name": "C-3PO",
                "height": "167",
                "mass": "75",
                "hair_color": "n/a",
            },
            {
                "id": "3",
                "name": "R2-D2",
                "height": "96",
                "mass": "32",
                "hair_color": "n/a",
            }
        ]
    };
    return(
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