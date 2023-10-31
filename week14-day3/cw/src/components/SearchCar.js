const SearchCar = ({ cars, handleChange }) => {
    return (
        <div>
            <select onChange={handleChange}>
                {
                    cars.map(car => {
                        return <option value={car.brand}>{car.brand}</option>
                    })
                }
            </select>
        </div>
    )
};

export default SearchCar;