import React from "react"
import { Route, Switch } from "react-router-dom";

import { ProductList } from '../ProductList'
import { IndividualProduct } from "../IndividualProduct"

export const ProductSubLayout = (props) => {
    return (
        <div className="products-sub-layout">
            <p>Products Sub Layout</p>
            <div className="primary-content">
                <Switch>
                    <Route path={props.match.path} exact component={ProductList}/>
                    <Route path={`${props.match.path}/:productId`} component={IndividualProduct}/>
                </Switch>
            </div>
        </div>
    )
}