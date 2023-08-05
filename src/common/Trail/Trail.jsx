import React, { useState, useEffect, useRef } from 'react';
import { useTrail, a } from '@react-spring/web';
import { useMediaQuery } from 'react-responsive';

const Trail = ({ open, children, textStyle, heightD, heightMob }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 350 },
    opacity: open ? 1 : 0,
    // x: open ? 0 : 20,
    y: open ? 0 : -20,
    height:
      (open && isDesktop ? heightD : 0) || (open && !isDesktop ? heightMob : 0),
    from: { opacity: 0, y: -20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={textStyle} style={style}>
          {/* <a.div key={index} className={s.trailsText} style={style}> */}
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
