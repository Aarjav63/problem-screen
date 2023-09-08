import {Button} from '@mui/material';
import { Colors } from "@/constants/colors";
import { useRecoilState } from "recoil";
import { bottomSheetState } from "@/store/atoms/problem";
import SubmissionBottomSheet from "./submission_bottom_sheet";

export default function EditorBottomBar() {
  const [open, setOpen] = useRecoilState(bottomSheetState);
  console.log(open);
  return (
    <div
      style={{
        padding: "10px 5%",
        display: "flex",
        position: "absolute",
        bottom: "0",
        zIndex: 100,
        backgroundColor: Colors.primary_background_color,
        width: '-webkit-fill-available',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button variant="contained" style={{backgroundColor: 'grey', flex: '1'}} onClick={()=>{
        setOpen(true)}}>Compile and Run </Button>
      <span style={{width:'20px'}}></span>
      <Button variant="contained" style={{backgroundColor: 'green', flex:'1'}}>Submit</Button>
    </div>
  );
}