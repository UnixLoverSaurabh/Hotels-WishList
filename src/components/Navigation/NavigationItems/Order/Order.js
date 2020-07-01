import React from 'react';
import classes from './Order.css';

const Order = (props) => {

        const materials = [];
        for (let materialName in props.materials) {
                materials.push(
                        {
                                name: materialName,
                                amount: props.materials[materialName]
                        }
                );
        }

        const materialOutput = materials.map(materialKey => {
                return <span key={materialKey.name} style={{
                        textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
        }} > {materialKey.name} ({materialKey.amount}) </span>;
        });

        return (
                <div className={classes.Order}>
                        <p>Materials: {materialOutput}</p>
                        <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
                </div>
        )
};

export default Order;