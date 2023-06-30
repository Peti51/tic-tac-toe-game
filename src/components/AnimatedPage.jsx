// This module is responsible for displaying the animated page and collapsible arrow components.
// The components are built on the Framer Motion library.
import React from "react";
import { motion } from 'framer-motion';

// Animation definition
const animation = {
  initial: {opacity: 0, x: 100},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -100},
}

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div 
        variants={animation} 
        initial='initial'
        animate='animate'
        exit='exit'>
        {children}
    </motion.div>
  )
}

export const AnimateBackArrow = ({ children }) => {
  return (
    <motion.div 
        className="back-arrow-container"
        variants={animation} 
        initial='initial'
        animate='animate'
        exit='exit'>
        {children}
    </motion.div>
  )
}

// The module exports two components: AnimatedPage and AnimateBackArrow.
// Both components are built on the Framer Motion library and apply 
// animation to their child elements.
// The components use the animation object to describe the animation, 
// which includes the initial state (initial),
// the animation itself (animate), and the exit state (exit) of the elements.
// The documentation provides information about the module, components, properties,ű
// and return values using JSDoc tags such as @module, @param, @returns, and @example.
// The documentation should focus on explaining the function of the component, 
// information about the properties, and describing the JSX structure of the component.