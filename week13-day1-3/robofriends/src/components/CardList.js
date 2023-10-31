import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    if(true) {
        throw new Error('Noo!')
    }
    return (
        <>
            {
                robots.map(robot => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            username={robot.username}
                            email={robot.email}
                        />
                    )
                })
            }
        </>
    );
}

export default CardList;