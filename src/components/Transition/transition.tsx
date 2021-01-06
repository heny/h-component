import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

interface TransitionProps {
  animation?: AnimationName,
  wrapper?: boolean;
}

type TransitionProp = TransitionProps & CSSTransitionProps

const Transition: React.FC<TransitionProp> = ({
  classNames,
  animation,
  children,
  wrapper,
  ...restProps
}) => {
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition
