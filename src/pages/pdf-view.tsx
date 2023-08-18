import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import {
  Button,
  Box,
  Flex,
  Spacer,
  HStack,
  Select,
  Input,
  Link,
} from "@chakra-ui/react";
import {  useState } from "react";
import {Viewer, Worker} from "@react-pdf-viewer/core"
import { DefaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setVewPdf] = useState(null);

  const fileType =['application/pdf']

  const handleChange = (e:any) =>{
      let selectedFile = e.target.files[0]
      if (selectedFile){
            if(selectedFile && fileType.includes(selectedFile.type)){
                  let reader = new FileReader()
                  reader.readAsDataURL(selectedFile)
                  reader.onload = (e:any) =>{
                        setPdfFile(e.target.result)
                  }
            } else{
                  setPdfFile(null)
            }
      }
      else{
            alert("Select a file")
      }
  }

  const handleSubmit = (e:any) =>{
      e.preventDefault()
      if(pdfFile !== null) {
            setVewPdf(pdfFile)
      }else{
            setVewPdf(null)
      }
  }
 // const newPlugin =  DefaultLayoutPlugin()

  return (
    <>
      <Head>
        <title>Pdf Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;700&family=Poppins:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="pdf-body" >
        <div className="logo">
          <img src="/logo.svg" />
        </div>

        <header>PDF View Page</header>
        <Link href="/" className="view-pdf">
          

          <Button colorScheme="blue" mb={5}>
          <ArrowBackIcon/> Back
            </Button>
  </Link>
        <HStack spacing="24px" className="grade-section" mb={4}>
       <form onSubmit={handleSubmit}>
       <Input width="350px"  type="file" onChange={handleChange}/>
        <Button colorScheme="blue" ml={4} type="submit">
            View
          </Button>
       </form>
        
         
        </HStack>

        <div className="pdf-container">
       

<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      { viewPdf && <> <Viewer fileUrl={viewPdf} /></>}
      { !viewPdf && <div className="pdf-text">No PDF</div>}
</Worker>

        </div>
       

      
      </main>
    
    </>
  );
}