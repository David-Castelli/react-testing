import { Component } from 'react' // importo 'Component' ed elimino 'createClass'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

    // commuto il componente in una class ES6
    // before: export const App = createClass({
    export class App extends Component { // le tonde qui ed in chiusura non sono più necessarie
    // aggiungo un nuovo elemento necessario per prendere in ingresso le props
    constructor(props) {
        // creo una 'super' class
        super(props)
        // passo lo stato iniziale in maniera diversa dalle precedenti, settandolo uguale ad un oggetto
        this.state = {
            // importante, qui devo inserire 'allSkiDays' e passargli i singoli elementi
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2016"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Kirkwood",
                        date: new Date("3/28/2016"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Mt. Tallac",
                        date: new Date("4/2/2016"),
                    powder: false,
                    backcountry: true
                }
            ]
        }
    }
    // getInitialState diventa non più necessario
    /*getInitialState() {
        return {
            allSkiDays:
        }
    }*/
    countDays(filter) {
        const {allSkiDays} = this.state
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length

    } // posso rimuovere le virgole
    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays(
                                 "powder"
                             )}
                             backcountry={this.countDays(
                                 "backcountry"
                             )} />
            </div>
        )
    }
}