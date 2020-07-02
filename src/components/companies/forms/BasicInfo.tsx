import React from 'react';

type Ref = HTMLDivElement;

const BasicInfo = React.forwardRef<Ref>((props, ref) => {
  return <div ref={ref}> Basic info</div>;
});

export default BasicInfo;
