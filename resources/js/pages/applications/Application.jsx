import React from "react";
import style from "./Application.module.scss";

function Application() {
    return (
        <div className={style["bg-image"]}>
            <div class="d-flex align-content-center flex-wrap w-75">
                <div class="col">
                    <div class="card m-5">
                        <div class="card-body">
                            <h4 class="card-title">YOUR APPLICATION</h4>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" class="card-link">
                                Card link
                            </a>
                            <a href="#" class="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card m-5">
                        <div class="card-body">
                            <h4 class="card-title">DEPARTAMENTS</h4>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" class="card-link">
                                Card link
                            </a>
                            <a href="#" class="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card m-5">
                        <div class="card-body">
                            <h4 class="card-title">ADD A NEW APPLICATION</h4>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" class="card-link">
                                Card link
                            </a>
                            <a href="#" class="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card m-5">
                        <div class="card-body">
                            <h4 class="card-title">Documents</h4>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" class="card-link">
                                Card link
                            </a>
                            <a href="#" class="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;
