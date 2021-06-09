import ReactHtmlParser from 'react-html-parser';
import * as Solve from '../processing/Solve';

// Function to show steps of chinese remainder problem
export function chineseStep(list_of_n_r) {
    let m = Solve.multipleAll(list_of_n_r);
    const array_y = Solve.chineseLists(list_of_n_r).arr_y;
    const array_M = Solve.chineseLists(list_of_n_r).arr_M;

    var steps = '<br><h1>Problem Solution</h1><h3>Linear Congruence System</h3>';

    var count = 1;
    for (let n_r of list_of_n_r) {
        steps += ('<p>x ≡ ' + n_r[1] + ' (mod ' + n_r[0] + '); a<sub>'+count+'</sub> = ' + n_r[1] + '; m<sub>'+count+'</sub> = ' + n_r[0] +'</p>');
        count++;
    }

    steps += '<br><h3>Calculate m</h3>';
    steps += ('<p>m = '+howCalculated(list_of_n_r, "M", count-1)+' = '+m+'</p>');

    steps += '<br><h3>Calculate M</h3>';
    count = 1;
    for (let M of array_M) {
        steps += ('<p>M<sub>'+count+'</sub> = '+howCalculated(list_of_n_r, "M", count-1)+' = '+M+'</p>');
        count++;
    }

    count = 1;
    steps += '<br><h3>Calculate y</h3>';
    for (let y of array_y) {
        steps += ('<p>y<sub>'+count+'</sub> = '+y+' because '+array_M[count-1]+' · '+y+' ≡ 1 (mod '+list_of_n_r[count-1][0]+')</p>');
        count++;
    }

    steps += '<br><h3>Result</h3><p>x = ';
    for (var i=0; i<list_of_n_r.length; i++) {
        steps += list_of_n_r[i][1] + ' · ' + array_M[i] + ' · ' + array_y[i];

        if (i < list_of_n_r.length-1) {
            steps += ' + ';
        } else {
            steps += (' (mod ' + m + ')</p>');
        }
    }

    steps += ('<p><b>x = ' + Solve.chineseSolution(list_of_n_r) + '</b></p>');

    steps += '</div>';

    return <div>{ ReactHtmlParser(steps) }</div>;
}

// Function to show how m and M is calculated
function howCalculated(list_of_n_r, morM, idx) {
    var result = '';

    for (var i=0; i<list_of_n_r.length; i++) {
        if (morM === "m") {
            result += (list_of_n_r[i][0] + ' · ');
        }
        
        else if (morM === "M") {
            if (i !== idx) {
                result += (list_of_n_r[i][0] + ' · ');
            }
        }
    }

    return result.substring(0, result.length-2);
}