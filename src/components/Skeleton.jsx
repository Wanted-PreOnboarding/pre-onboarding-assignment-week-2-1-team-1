import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';

import PropType from 'prop-types';

// interface Props {
//     width?: number;
//     height?: number;
//     circle?: boolean;
//     rounded?: boolean;
//     count?: number;
//     wUnit?: string;
//     hUnit?: string;
//     animation?: boolean;
//     color?: string;
//     style?: React.CSSProperties;
//   }

// const Placeholder: React.FC = () => (
//     <ItemContainer>
//       <UlContainer>
//         <SurveySkeleton width={60} height={19} />
//         &nbsp;
//         <SurveySkeleton width={60} height={19} />
//       </UlContainer>
//       <SurveySkeleton width={200} height={25} rounded />
//       <Content>
//         <SurveySkeleton width={98} wUnit="%" height={18} rounded />
//         <SurveySkeleton width={170} height={18} rounded />
//       </Content>
//       <DateContainer>
//         <SurveySkeleton width={158} height={14} rounded />
//       </DateContainer>
//       <SurveySkeleton width={100} wUnit="%" height={36} />

//       <Hashtag>
//         <SurveySkeleton width={170} height={12} rounded />
//       </Hashtag>
//     </ItemContainer>
//   );

const SurveySkeleton = ({
  width,
  style,
  height,
  circle,
  rounded,
  count,
  hUnit = 'px',
  wUnit = 'px',
  animation = true,
  color = '#f4f4f4',
}) => {
  const content = useMemo(() => [...Array({ length: count })].map(() => '-').join(''), [count]);
  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      hUnit={hUnit}
      wUnit={wUnit}
      color={color}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default SurveySkeleton;

const pulseKeyframe = keyframes`
  0% {
    opacity:1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`;

const Base =
  styled.span <
  Props >
  `
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && `border-radius: 8px`};
  
  ${({ circle }) => circle && `border-radius: 50%`};
  ${({ width, height }) => (width || height) && `display: block`};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, wUnit }) => width && wUnit && `${width}${wUnit}`};
  height: ${({ height, hUnit }) => height && hUnit && `${height}${hUnit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

SurveySkeleton.propTypes = {
  width: PropType.number,
  style: PropType.object,
  height: PropType.number,
  circle: PropType.bool,
  rounded: PropType.bool,
  count: PropType.number,
  hUnit: PropType.string,
  wUnit: PropType.string,
  animation: PropType.bool,
  color: PropType.string,
};
