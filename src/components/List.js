import React from 'react'
import Row from './Row'
import '../css/List.css'

function List(props) {  
  const length = props.length;
  const multipleMappings = props.multipleMappings;

  const rowProps = generateRowProps(length, multipleMappings);
  
  const rowList = rowProps.map(props => <Row key={props.rowIndex} color={props.color} text={props.text}></Row>);

  return (
    <div className='list'>{rowList}</div>
  )
}

export function generateRowProps (length, multipleMappings){
  var multipleRowProps = {};
  for (const mappingIndex in multipleMappings) {
    const mapping = multipleMappings[mappingIndex];
    const colorFactor = 1 + 0.5 * (mappingIndex / (multipleMappings.length - 1));
    const multiples = Array.from(Array(Math.ceil(length/mapping.number) + 1).keys()).map(row => row * mapping.number);
    multiples.forEach(multiple => multipleRowProps[multiple] = {text: mapping.text, color: `rgba(${170*colorFactor},${214*colorFactor},${62*colorFactor},255)`});
  }

  var rowProps = Array.from(Array(length).keys()).map(row => row + 1);
  rowProps = rowProps.map(rowIndex => {
    if (multipleRowProps[rowIndex] !== undefined) {
      return {rowIndex: rowIndex, text: multipleRowProps[rowIndex].text, color: multipleRowProps[rowIndex].color};
    }
    return {rowIndex: rowIndex, text: rowIndex.toString(), color:  'white'};
  });
  
  return rowProps;
}

export default List
