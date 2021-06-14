import React, { memo } from 'react';

import Pill from 'controls/pill';

const Pills = ({ className="", options=[], activeId, pillsOnClick }) => {
  return (
    <div className={ `flex-center--center ${ className }` }>
      <div className="flex-center--space-between" style={ { width: `${ options.length * 92 }px` } }>
        { options.map((o, idx) => (
          <Pill
            key={ `pill__${ idx }` }
            option={ o }
            activeId={ activeId }
            pillsOnClick={ pillsOnClick }
          />
        )) }
      </div>
    </div>
  );
}

export default memo(Pills);