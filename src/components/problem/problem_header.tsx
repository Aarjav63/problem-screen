import { ProblemHeader } from "@/types/problem";

import styles from './problem_header.module.css';

export default function ProblemHeaderComponent({header}: {header: ProblemHeader}){
    return (
        <div style={{
            padding: "1rem"
        }}>
            <h1>{header.title}</h1>

            <div className={styles.meta_data_wrapper}>

                <p className={styles.meta_data_text} style={{color: getColorByDifficulty(header.difficulty), fontWeight: 700}}>
                    {header.difficulty}
                </p>

                <p className={styles.meta_data_text}>
                    {`Acceptance: ${header.acceptancePercentage}%`}
                </p>

                <p className={styles.meta_data_text}>
                    {`Submissions: ${header.submissionsCount}`}
                </p>
            </div>
        </div>
    )
}


function getColorByDifficulty(difficulty: string) : string {
    switch(difficulty){
        case "hard":
            return 'red';
        default:
            return 'green';
    }
}