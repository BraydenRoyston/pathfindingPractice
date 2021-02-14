import React, { useState } from 'react';
import Node from './Node/Node';


function PathfindingVisualizer() {
    const [nodes, setNodes] = useState([]);

    const componentDidMount = () => {
        const nodes = [];
        for (let row = 0; row < 15; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        setNodes({nodes});
    }

    componentDidMount();
    console.log(nodes);

    return (
        <div className="grid">
            {nodes.map((row, rowIdx) => {
                return <div>
                    {row.map((node, nodeIdx) => <Node></Node>)}
                    </div>
            })}
        </div>
    )
}

export default PathfindingVisualizer
