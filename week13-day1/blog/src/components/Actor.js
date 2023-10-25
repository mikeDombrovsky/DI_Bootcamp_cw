const Actor = (props) => {

    return (
        <ul style={{ color: "blue" }}>
            {props.actors.map((actor, i) => {
                const { firstName, lastName, image } = actor;
                return <li key={i}>{firstName} {lastName} <img src={image} width={100} /></li>
            })}
        </ul>
    )
}
export default Actor;