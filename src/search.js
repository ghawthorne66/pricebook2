import React from 'react'
import {items} from "./items.js"

 var data = items.map()

function getProduct(items) {
    return data.filter(
        function(data){ return data.items == items }
    );
}

var found = getProduct('');