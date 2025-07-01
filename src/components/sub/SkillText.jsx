"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="flex items-center py-2 px-3 border border-[#7042f88b] opacity-90 rounded-md"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="text-sm text-white">
          Make better with frontend technologies
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-2xl text-white font-medium mt-2.5 text-center mb-4"
      >
        Key Technologies
      </motion.div>

      {/* Optional text block */}
      {/* 
      <motion.div
        variants={slideInFromRight(0.5)}
        className="italic text-lg text-gray-200 mb-10 mt-2 text-center"
      >
        Never miss a task, deadline or idea
      </motion.div> 
      */}
    </div>
  )
}

export default SkillText
