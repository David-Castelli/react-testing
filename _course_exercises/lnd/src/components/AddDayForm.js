import { PropTypes, Component } from 'react'

// creo un array di scelte preimpostate per il form
const tahoeResorts = [
    "Alpine Meadows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Squaw Valley",
    "Sugar Bowl"
]

class Autocomplete extends Component {
    // inserisco un metodo 'get' che andrà a recuperare il valore di 'ref' ovunque esso sia presente
    get value() {
        return this.refs.inputResort.value
    }

    // inserisco un metodo 'set' che andrà a settare il valore di 'ref' quando inserito, passandogli ''
    set value(inputValue) {
        this.refs.inputResort.value = inputValue
    }

    render() {
        return (
            <div>
                <input ref="inputResort" // Passo 'ref' per ottenere le opzioni del campo più avanti
                       type="text"
                       list="tahoe-resorts"/>
                {/*Creo un blocco datalist per mostrare una lista, con id uguale a list di cui sopra */}
                <datalist id="tahoe-resorts">
                    {/*Mappo le opzioni e restituisco option tag per ognuna di esse*/}
                    {this.props.options.map(
                        /*passo una callback function con come parametri le opzioni e relativo indice */
                        (opt, i) => <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}

export const AddDayForm = ({ resort,
                            date,
                            powder,
                            backcountry,
                           onNewDay }) => {

    let _resort, _date, _powder, _backcountry

    const submit = (e) => {
        e.preventDefault()

        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        })

        console.log('resort', _resort.value)
        console.log('date', _date.value)
        console.log('powder', _powder.checked)
        console.log('backcountry', _backcountry.checked)

        _resort.value = ''
        _date.value = ''
        _powder.value = false
        _backcountry.value = false
    }

    return (
        <form className="add-day-form" onSubmit={submit}>
            <label htmlFor="resort">Resort Name</label>
            <Autocomplete options={tahoeResorts}
                   ref={input => _resort = input }
            />

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   required
                   defaultValue={date}
                   ref={input => _date = input }
            />

            <div>
                <input id="powder"
                       type="checkbox"
                       defaultChecked={powder}
                       ref={input => _powder = input }
                />
                <label htmlFor="powder">Powder</label>
            </div>

            <div>
                <input id="backcountry"
                       type="checkbox"
                       defaultChecked={backcountry}
                       ref={input => _backcountry = input }
                />
                <label htmlFor="backcountry">Backcountry</label>
            </div>
            <button>Add Day</button>
        </form>
    )

}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}