const Car = ({ chosenCars, nameChosenCar }) => {
    return (
        <div>
            {
                chosenCars.map(car => {
                    return (
                        <ul>
                            <li>Brand : {car.brand}</li>
                            <li>Name : {car.name}</li>
                            <li>Year of creation : {car.year}</li>
                            <li>Origin : {car.origin}</li>
                        </ul>
                    )
                }

                )
            }
        </div>
    )
}
export default Car;