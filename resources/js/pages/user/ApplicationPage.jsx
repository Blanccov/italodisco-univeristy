import { useState, useCallback, useEffect } from "react";
import style from "./ApplicationPage.module.scss";
import Card from "../UI/Card";
import ApplicationList from "./ApplicationList";
function Application() {
    return (
        <div className={style["bg-image"]}>
            <div class="d-flex align-content-center flex-wrap w-100">
                <Card
                    style={{
                        backgroundImage: `url("images/bookphoto.jpg")`,
                    }}
                    href={"/result"}
                >
                    your application
                </Card>
                <Card
                    style={{
                        backgroundImage: `url("images/mapsphoto.jpg")`,
                    }}
                    href={"/"}
                >
                    departametns
                </Card>
                <Card
                    style={{
                        backgroundImage: `url("images/loginphoto.jpg")`,
                    }}
                    href={"/"}
                >
                    add a new application
                </Card>
                <Card
                    style={{
                        backgroundImage: `url("images/buildsphoto.jpg")`,
                    }}
                    href={"/"}
                >
                    documents
                </Card>
            </div>
        </div>
    );
}

export default Application;
