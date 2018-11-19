import React, { Component } from 'react'


class AnimalList extends Component {
    render() {
        return (
            <section className="animals list">
            {
                this.props.animals.map(animals =>
                    <div key={animals.id}>
                        <p>{animals.name}</p>
                        <p>{animals.type}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList