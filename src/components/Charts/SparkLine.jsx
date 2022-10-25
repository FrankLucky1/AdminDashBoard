import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({color, data, width, height, id, type, currentColor}) => {
  return (
   <SparklineComponent
   id={id}
   height={height}
   width={width}
   border={{color:currentColor, width:2 }}
   lineWidth={1}
   valueType='Numeric'
   fill={color}
   xName='x'
   yName='yval'
   type={type}
   tooltipSettings={{
    visible:true,
    format: "${x} : value ${yval}",
    trackLineSettings: {
      visible:true 
    }
   }}
   markerSettings={{visible: ['All'], size:2.5, fill: currentColor}}
   dataSource={data}
   >
    <Inject services={[SparklineTooltip]}/>
   </SparklineComponent>
  )
}

export default SparkLine