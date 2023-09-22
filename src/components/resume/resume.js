import React, { useState, useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";

import pdf from "../../assets/pdf/parag-resume.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  "https://github.com/pcparagc/parag-portfolio/blob/main/src/assets/pdf/parag-resume.pdf";
const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <Container maxWidth="lg" style={{ textAlign: "center", padding: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px", margin: "20px" }}
          startIcon={<DownloadIcon />}
        >
          Download Resume
        </Button>
        <Grid container className="resume">
          <Grid item xs={12} className="d-flex justify-content-center">
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Resume;