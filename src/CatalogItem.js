import React from 'react'
import DataItems from './item.json'
import "./css/CatalogItem.module.css"

// Find the step that you cannot move on without

const CatalogItem = () => {

  return (
    <div className="container">
      <div className="itemCard">
        <div style={{ textAlign: 'center', color: 'gray' }}>
          <h1>Item Data</h1>
          {DataItems.map((DataItems, index) => {
            return <div>
              <h1>{DataItems.title}</h1>
              <h3>{DataItems.type}</h3>
              <p>{DataItems.description}</p>

              <img src={DataItems.image}
                style={{ height: '140px', width: '140px' }}
                alt="water glass"
              />
            </div>
          })}
        </div>
      </div>
    </div>
  )
};
export default CatalogItem