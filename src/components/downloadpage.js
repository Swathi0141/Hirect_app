import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import './downloadpage.css';
import { render } from "@testing-library/react";

const navigate = useNavigate();
function App() {
        return(
            <>
            <div className = "p-4 box">
                <div className="container">
                <div data-v-ccf53fd8="" data-v-fd54f974="">
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" data-v-ccf53fd8="">
                <div class="container" data-v-ccf53fd8="">
                <Link to = "/">
                <a href="/" aria-current="page" class="navbar-brand nuxt-link-exact-active nuxt-link-active" data-v-ccf53fd8="">
                 <img src="/_nuxt/img/hirect-logo.130906c.png" alt="" data-v-ccf53fd8=""/>
                 </a>
                </Link>
                 <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-v-ccf53fd8="">
                     <span class="navbar-toggler-icon" data-v-ccf53fd8=""></span>
                 </button>
                 <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll nav-dropdown-link" data-v-ccf53fd8="">
                 <li class="nav-item" data-v-ccf53fd8="">
                    <button type="button" class="btn default-btn button-sm download-btn" data-v-ccf53fd8="">
                        Download App
                    </button>
                </li>
                <li class="nav-item" data-v-ccf53fd8=""></li>
                <button type="button" class="btn bordered-btn button-sm watch-demobtn" data-v-ccf53fd8=""></button>
                </ul>
                </div>
                </nav>
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top:15vh">
                <div class="el-dialog__header">
                <span class="el-dialog__title"></span>
                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
                </button>
                </div>
                </div>
                <div class="download-modal modal-overlay" style="" data-v-99439bde="" data-v-ccf53fd8="">
                    <div class="modal" data-v-99439bde="">
                        <h3 class="down-lo" data-v-99439bde="">
                            Scan &amp; Download Hirect App!</h3> <p data-v-99439bde="">
                            Open the camera on your phone and scan the QR code<br data-v-5e2fa580=""/>below to
                        download Hirect App.
                        </p>
                        <img src="https://www.hirect.in/_nuxt/img/qr-code-scan.793d5bd.png" alt="" data-v-99439bde=""/>
                         <ul class="app-scan-button" data-v-99439bde="">
                             <li data-v-99439bde="">
                                 <a href="https://apps.apple.com/US/app/id1518442417?mt=8" target="_blank" data-v-99439bde="">
                                     <img src="https://www.hirect.in/_nuxt/img/app-store-logo.ae73fb9.png" alt="" data-v-99439bde=""/>
                                </a>
                            </li> 
                            <li data-v-99439bde="">
                                <a href="https://hirectin.onelink.me/TwhD/b0fe8b20" target="_blank" data-v-99439bde="">
                                    <img src="https://www.hirect.in/_nuxt/img/google-play-logo.4d84e11.png" alt="" data-v-99439bde=""/>
                                </a>
                            </li> 
                            <li data-v-99439bde="">
                                <a href="https://prod-apk-package.s3.ap-south-1.amazonaws.com/app-official-release.apk" data-v-99439bde="">
                                    <img src="https://www.hirect.in/_nuxt/img/anroid.bebdb99.png" alt="" data-v-99439bde=""/>
                                </a>
                            </li>
                            </ul>
                            </div>
                            </div>
                             <div class="close" data-v-99439bde="">
                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times" data-v-99439bde="">
                                     <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" data-v-99439bde="" class="">
                                    </path>
                                 </svg>
                             </div>
                    </div>
             </div>
                        <ul class="app-scan-button" data-v-5e2fa580="">
                        <li data-v-5e2fa580="">
                        <a data-v-5e2fa580=""><img src="/_nuxt/img/qr-code-scan23.a51a336.png" alt="" class="qr-code-img" data-v-5e2fa580=""/></a>
                        </li>
                        <li data-v-5e2fa580="">
                        <a href="https://apps.apple.com/US/app/id1518442417?mt=8" target="_blank" data-v-5e2fa580="">
                            <img src="/_nuxt/img/app-store-logo.6e8da62.svg" alt="" data-v-5e2fa580=""/>
                        </a>
                        </li> 
                        <li data-v-5e2fa580="">
                            <a href="https://hirectin.onelink.me/TwhD/b0fe8b20" target="_blank" data-v-5e2fa580="">
                                <img src="/_nuxt/img/google-play-logo.f2b0567.svg" alt="" data-v-5e2fa580=""/>
                            </a>
                        </li>
                        </ul>
                         <div class="col-md-6" data-v-5e2fa580="">
                             <div class="app-scan-img" data-v-5e2fa580="">
                                 <img src="/_nuxt/img/download-hirect-img.abaad9d.png" alt="" data-v-5e2fa580=""/>
                             </div>
                        </div>
             </div>
</>
        );   
}  