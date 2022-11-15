import { AnimateSharedLayout, motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import styles from '../styles/Play.module.css';
import Button from './Button'

type PlayButtonProps = {
    advanced: boolean;
};

const PlayButtons: FunctionComponent<PlayButtonProps> = ({ advanced }) => {
    return (
        <AnimateSharedLayout>
            <motion.div className={styles.playbuttons}>
                {advanced ? (
                    <div className={styles.threegrid}>
                        <Button classN={styles.sci} lid="sci">
                            <img src="/icon-scissors.svg" alt="" />
                        </Button>
                        <Button classN={styles.spock}>
                            { " " }
                            <img src="/icon-spock.svg" alt="" />
                        </Button>
                        <Button classN={styles.paper} lid="paper">
                            <img src="/icon-paper.svg" alt="" />
                        </Button>
                        <Button classN={styles.liz}>
                            <img src="/icon-lizard.svg" alt="" />
                        </Button>
                        <Button classN={styles.rock} lid="rock">
                            <img src="/icon-rock.svg" alt="" />
                        </Button>
                    </div>
                ) : (
                    <div className={styles.twogrid}>
                        <Button classN={styles.sci2} lid="sci">
                            <img src="/icon-scissors.svg" alt="" />
                        </Button>
                        <Button classN={styles.paper2} lid="paper">
                            <img src="/icon-paper.svg" alt="" />
                        </Button>
                        <Button classN={styles.rock2} lid="rock">
                            <img src="/icon-rock.svg" alt="" />
                        </Button>
                    </div>
                )}
            </motion.div>
        </AnimateSharedLayout>
    )
}

export default PlayButtons
