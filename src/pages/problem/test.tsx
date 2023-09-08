import Editor from '@monaco-editor/react';
import styles from './problem.module.css';
import ProblemHeaderComponent from '@/components/problem/problem_header';
import ProblemDescription from '@/components/problem/problem_description';
import EditorBottomBar from '@/components/problem/editor_bottom_bar';
import SubmissionBottomSheet from '@/components/problem/submission_bottom_sheet';

import SplitPane, { Pane } from 'split-pane-react';
import { useState } from 'react';
// import 'split-pane-react/esm/themes/default.css'




const code : string = 
`
#include <iostream>
  using namespace std;

  int main() {
    cout << "Hello World!";
    return 0;
  }
`


   
export default function TestProblem() {

    const [sizes, setSizes] = useState([
      '30%',
      '30%',
  ]);
  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};


  return (
    <div className={styles.wrapper} style= {{
        backgroundColor: "Colors.primary_background_color"
    }}>
      <SplitPane split='vertical' sizes={sizes} onChange={setSizes} >
      <Pane minSize='30%' maxSize='70%'>

      <div className={styles.problem_container}>
            <ProblemHeaderComponent header= {{
              title: "Floyd Warshall",
              difficulty: "hard",
              acceptancePercentage: 55,
              submissionsCount: 1000,
            }}></ProblemHeaderComponent>
            <ProblemDescription description={description}></ProblemDescription>
            <ProblemDescription description={description}></ProblemDescription>
            <ProblemDescription description={description}></ProblemDescription>
            <SubmissionBottomSheet></SubmissionBottomSheet>
        </div>
      </Pane>
      <Pane>
      <div className={styles.editor_container}>
        <EditorBottomBar></EditorBottomBar>
      
        <Editor theme='vs-dark' defaultLanguage="cpp" defaultValue={code}/>
      </div>
      </Pane>
      </SplitPane>
    </div>
    )
}

const description : string = `The problem is to find the shortest distances between every pair of vertices in a given edge-weighted directed graph. The graph is represented as an adjacency matrix of size n*n. Matrix[i][j] denotes the weight of the edge from i to j. If Matrix[i][j]=-1, it means there is no edge from i to j.<strong> Do it in-place. <strong><br><br>
<div class='code_container'>
<code>
<strong>Example 1:</strong><br>
Input: matrix = {{0,1,43},{1,0,6},{-1,-1,0}}<br>
<img src='https://media.geeksforgeeks.org/wp-content/uploads/20221106202714/WhatsAppImage20221106at82359PM.jpeg' alt='floyd warshall example 1' width='100px' height='100px'><br>
Output: {{0,1,7},{1,0,6},{-1,-1,0}}<br>
Explanation: We can reach 2 from 0 as 0->1->2
and the cost will be 1+6=7 which is less than 
43.
</code>
</div>
`;