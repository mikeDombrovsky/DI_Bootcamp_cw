

// const getX = (callback) => {
//     console.log('waiting x..');
//     setTimeout(()=> {
//         console.log('getting x..');
//         callback(5);
//     }, 1000);
// };

// const getY = (callback) => {
//     console.log('getting y..');
//     callback(6)
// }

// const getXY = () => {
//     getX(x => {
//         getY( y => {
//             console.log(x + y);
//         })
//     });
// };


const getX = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('getting x..');
            res(5);
        }, 1000);
    });
};

const getY = () => {
    console.log('getting y..');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(6);
        }, 1000)
    });
};

const getXY = () => {
    console.log();
    getX()
    .then(x => {
        const y = getY();
        y.then(y => console.log(x + y))
            .catch(err => console.log(err))
        }
    ).catch(err => {
        console.log(err);
    });
};

