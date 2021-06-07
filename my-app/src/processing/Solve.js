// Function to get all y's and M's
export function chineseLists(list_of_n_r) {
    var array_y = [];
    var array_M = [];

    for (var n_r of list_of_n_r) {
        var M = multipleAll(list_of_n_r) / n_r[0];
        array_M.push(M);

        var j = 1;
        while ((M*j) % n_r[0] !== 1) {
            j++;
        }

        var y = j;
        array_y.push(y);
    }

    return {arr_y: array_y, arr_M: array_M};
}

// Function to multiple all dividers
export function multipleAll(list_of_n_r) {
    var result = 1;

    for (var n_r of list_of_n_r) {
        result *= n_r[0];
    }

    return result;
}

// Function to get solution from known all y's and M's
export function chineseSolution(list_of_n_r) {
    const array_y = chineseLists(list_of_n_r).arr_y;
    const array_M = chineseLists(list_of_n_r).arr_M;

    var result = 0;
    for (var i=0; i<list_of_n_r.length; i++) {
        result += list_of_n_r[i][1] * array_M[i] * array_y[i];
    }

    return result % multipleAll(list_of_n_r);
}

// var l = [];
// var l1 = [5,3];
// var l2 = [7,5];
// var l3 = [11,7];
// var l4 = [9,5];
// var l5 = [17,11];

// l.push(l1);
// l.push(l2);
// l.push(l3);
// l.push(l4);
// l.push(l5);

// console.log(l)
// console.log(chineseSolution(l));