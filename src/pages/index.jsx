import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-100 bg-primary py-1 text-white text-center fs-5 text-uppercase fs__5">
          Enter Email to receive $10 OFF
        </div>

        <section className="container-fluid">
          <div className="row mx-0 vh-100 mt-3 radius gap-lg-0 gap-5">
            <div className="col-lg-6 px-0 bg-dark bg__line radius">
              <div className="container-fluid px-4">
                <div className="pt-4">
                  <img src="Logo.png" alt="" />
                </div>
                <h1 className="pt-5 mt-5 text-white fw-bold display-1 text-lg-start text-center">
                  Title
                </h1>
                <p className="text-white-50 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam numquam beatae <br className="d-lg-block d-none" />{" "}
                  amet unde corrupti pariatur ipsum, harum dolor saepe.
                  Asperiores repellat quod mollitia{" "}
                  <br className="d-lg-block d-none" /> aliquid corporis quisquam
                  ad repudiandae dolore at.
                </p>
                <p className="fs-5 text-white-50 mb-0 fw-bold">Lorem Ipsum</p>
                <p className="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam numquam beatae <br className="d-lg-block d-none" />{" "}
                  amet unde corrupti pariatur ipsum, harum dolor saepe.
                  Asperiores repellat quod mollitia{" "}
                  <br className="d-lg-block d-none" /> aliquid corporis quisquam
                  ad repudiandae dolore at.
                </p>
                <div className="mt-5 pt-4 mb-3 d-flex gap-lg-5 gap-4 align-items-center flex-lg-nowrap flex-wrap justify-content-center justify-content-lg-start">
                  <div className="socialbtn">
                    <i className="fa-brands fa-twitter"></i> Post To Twitter
                  </div>
                  <div className="socialbtn">
                    <i className="fa-brands fa-facebook"></i> Post To Twitter
                  </div>
                  <div className="socialbtn">
                    <i className="fa-brands fa-linkedin"></i> Post To Twitter
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-0 rainbow radius2 position-relative d-lg-block d-flex justify-content-center">
              <img src="col6.png" alt="" className="img-fluid absolute__img" />
            </div>
          </div>
        </section>
        <section className="mt-5 pt-4">
          <div className="container">
            <div className="h1 text-center mb-lg-0 mb-4">Motto</div>
            <div className="row  gap-lg-0 gap-5 mx-0 align-items-start">
              <div className="col-lg-6">
                <img src="desk.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6">
                <img src="desk2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="my-5 pt-5">
          <div className="container">
            <div className="component__div">
              <div className="border__div w-100 h-100">
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src="Folder.png"
                      className="folder mb-3"
                      style={{ width: "70px" }}
                      alt=""
                    />
                  </div>
                  <div className="btn btn-dark px-5 py-2 fs-4">Select File</div>
                  <div className="text-center text-white">
                    or drag & drop your file here
                  </div>
                  <div className="text-center text-white mt-4">
                    We accept .PDF and .DOCX files up to 20MB, 30 pages max
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
