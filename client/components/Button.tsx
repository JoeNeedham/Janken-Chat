import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import styles from "../styles/Play.module.css"

type ButtonProps = {
    classN: string;
    lid?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ classN, children, lid}) => {
    return(
        <motion.div layoutId={lid} className={classN}>
            <div className={styles.inside}>{children}</div>
        </motion.div>
    );
};

export default Button;