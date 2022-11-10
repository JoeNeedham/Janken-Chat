import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import styles from "../styles/Play.module.css";
import PlayButtons from "./PlayButtons";

type RulesProps = {
    advanced: boolean;
    setopen?: any;
    open?: boolean;
};

export const Play: FunctionComponent<RulesProps> = ({ advanced }) => {
    return (
        <motion.div
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: 360 }}
            className={styles.container}
        >
            {advanced ? (
                <img src="/bg-pentagon.svg" />
            ) : (
                <img src="/bg-triange.svg" />
            )}
            <PlayButtons advanced={advanced} />
        </motion.div>
    )
}

