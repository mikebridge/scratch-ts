import * as React from 'react';
import * as Rx from 'rxjs';
import {red100} from 'material-ui/styles/colors';

interface IFizzBuzzProps {
}

const numberStyle = {
    float: "left",
    margin: 3,
    padding: 4,
    backgroundColor: red100
};

const container: any = {
    display: "flex",
    justifyContent: "center"
};

export const NumberComponent = ({x}: {x: string}) => {
   return (
       <span style={numberStyle}>{x}</span>
   );
};

export class FizzBuzz extends React.Component<IFizzBuzzProps, {}> {

    public render(): JSX.Element {
        const min = 1, max = 100;
        let list: JSX.Element[] = [];

        const subscription = Rx.Observable
            .range(min, max)
            .map(x => (x % 3 === 0 ? "Fizz" : "")
                    + (x % 5 === 0 ? "Buzz" : "") || x)
            .subscribe(x => list = [...list, (<NumberComponent x={x.toString()} />)]);
        
        return (
            <div style={container}>
                <div style={{maxWidth: 760}}>
                    { list }
                </div>
            </div>
        );
    }
}

export default FizzBuzz;

