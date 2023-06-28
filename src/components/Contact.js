// components/About.js

import React from 'react';
import styles from './styles/Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
            className={styles.home} // Add the CSS module class here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
   <div className="contact">
            <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} />
                : ybhatia@slu.edu
            </div>
            <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} />
                : +1 (314)- 814- 6036
            </div>
        </div>
    </motion.div>
  );
}

export default Contact;
