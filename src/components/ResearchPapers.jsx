import React from 'react'
import '../styles/ResearchPapers.css'
import Paper from './Paper'

function ResearchPapers() {
  return (
    <div className='research__paper'>
      <h1 className='research__title'>Research Papers</h1>
      <Paper
        image='https://coruzant.com/wp-content/uploads/2023/01/quantum-computer.jpg'
        title="BINARY IMAGE CLASSIFICATION WITH TENSORFLOW QUANTUM AND CIRQ        "
        abstract="Image classification is a fundamental component of computer vision, holding significant implications for a wide array of applications, from medical diagnoses to autonomous driving. Recently, quantum computing has emerged as a promising avenue for enhancing the accuracy and efficiency of image classification. This research investigates the application of Tensorflow Quantum (TFQ) in conjunction with Cirq to harness the potential of quantum computing in binary image classification."
        link="https://www.jetir.org/view?paper=JETIR2311168"
      />
    </div>
  )
}

export default ResearchPapers