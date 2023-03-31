import React from "react";
import styles from "./Top.module.css";

function TopBanner() {
    return(
        <>
            <div className="row">
                <div className="col-6">
                    <img src="./Movie_pic.jpg" alt="Joel Hilton" />
                </div>
                <div className="col align-self-center text-start">
                    <h1 className={styles.h1}>Joel Hilton's Movie Site - Home</h1>
                </div>
            </div>
        </>
    );
}

export default TopBanner;