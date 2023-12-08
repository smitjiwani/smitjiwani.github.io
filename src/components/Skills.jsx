import React from 'react'
import '../styles/Skills.css'
import { frame, motion } from 'framer-motion'


function Skills() {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <div className='skills__container'>
        {/* create a collage of all skills */}

        <div className="skills__row">


          <motion.div
            initial={{ opacity: 0, padding: 500 }}
            whileInView={{ opacity: 1, padding: 0 }}
            transition={{ duration: 1 }}
          >


          <img src='https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/socketio/socketio-ar21.svg' alt="smit" />

          <img src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/docker/docker-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg' alt="smit" />

          <img src='https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/python/python-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/redis/redis-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/openapis/openapis-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/hasuraio/hasuraio-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/unity3d/unity3d-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg' alt="smit" />
          <img src='https://www.vectorlogo.zone/logos/pugjs/pugjs-ar21.svg' alt="smit" />


          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Skills