import React from "react";
import Pdf from "react-to-pdf";

import CV from "./CV";

const ref = React.createRef();

export default function DownloadCV() {
  //   useEffect(() => {
  //     console.log("Start downloading!!");
  //     const input = document.getElementsByClassName("makeStyles-cvContainer-14");
  //     html2canvas(input).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, "JPEG", 0, 0);
  //       pdf.save("download.pdf");
  //     });
  //   }, []);
  return (
    <>
      <Pdf targetRef={ref} filename="example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download</button>}
      </Pdf>
      <div ref={ref}>
        <CV />
      </div>
    </>
  );
}
