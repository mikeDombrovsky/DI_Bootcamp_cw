const flattered = [[0, 1], [2, 3], [3, 5]].reduce(
    (acc, in_arr) => {
        debugger;
        return acc.concat(in_arr);
    }, []
);