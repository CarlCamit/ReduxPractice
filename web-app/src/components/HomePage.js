import React, { Fragment } from "react"

export const HomePage = (props) => {
    return (
        <Fragment>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <button onClick={() => { props.setName("Max")}} >Max</button>
            <button onClick={() => { props.setName("Anna")}} >Anna</button>
            <button onClick={() => { props.setAge(23)}} >23</button>
            <button onClick={() => { props.setAge(34)}} >34</button>
        </Fragment>
    )
}