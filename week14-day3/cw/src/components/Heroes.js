const Heroes = ({name}) => {
    if(name === 'Darth Vader'){
        throw new Error('Not Hero!')
    }
    return<div>{name}</div>
};

export default Heroes;