import { Colors } from "@/constants/colors";
import { bottomSheetState } from "@/store/atoms/problem";
import { useSetRecoilState, useRecoilValue } from "recoil";
import CloseIcon from '@mui/icons-material/Close';

export default function SubmissionBottomSheet() {
  const open = useRecoilValue(bottomSheetState);
  return (
    <>
      {open && (
        <div
          style={{
            height: 'calc(100vh - 4rem)',
            width: 'inherit',
            backgroundColor: 'rgb(48 47 47)',
            borderRadius: "1rem 1rem 0 0",
            position: "absolute",
            bottom: "0",
            margin: '0 -1rem 0 -1rem',
            paddingRight: '1rem',
            zIndex: 100,
          }}
        >
          <SubmitSheetHeader />
        </div>
      )}
    </>
  );
}

function SubmitSheetHeader(){
  const setOpen = useSetRecoilState(bottomSheetState);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 1rem',
            height: '3rem',
            marginTop: '1rem',
        }}>
            <h2>Output Window</h2>
            <CloseIcon cursor={'pointer'} onClick={()=>{setOpen(false)}}/>
        </div>
    )
}
