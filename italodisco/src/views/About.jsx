import React from "react";
import styles from "./About.module.scss";

export default function About() {
    return (
        <div className={styles["bg-image"]}>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 ">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">About univeristy</h4>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    Card subtitle
                                </h6>
                                <p class="card-text">
                                    Italodisco University to jedna z najbardziej
                                    renomowanych i innowacyjnych uczelni na
                                    świecie. Nazwana na cześć znanego artysty
                                    Taco Hemingwaya, instytucja ta łączy w sobie
                                    dziedzictwo artystyczne i akademicką
                                    doskonałość. Położona w malowniczym
                                    otoczeniu, na skraju przepięknego parku,
                                    uczelnia oferuje swoim studentom nie tylko
                                    doskonałe warunki do nauki, ale również
                                    inspirujące otoczenie. Kampus jest
                                    zaprojektowany w taki sposób, aby zapewnić
                                    harmonię pomiędzy nowoczesnością a naturą,
                                    co sprzyja twórczości i kreatywności.
                                    Italodisco University słynie z różnorodnej
                                    oferty edukacyjnej, obejmującej zarówno
                                    nauki humanistyczne, jak i nauki
                                    przyrodnicze. Kierunki studiów są starannie
                                    opracowane i dostosowane do wymagań rynku
                                    pracy, umożliwiając studentom rozwój w
                                    obszarach, które ich najbardziej interesują.
                                    Uczelnia zapewnia nie tylko wysoko
                                    wykwalifikowaną kadrę nauczycieli, ale także
                                    doskonale wyposażone laboratoria, biblioteki
                                    i sale wykładowe. Studenci mają dostęp do
                                    najnowszych technologii i materiałów
                                    edukacyjnych, co umożliwia im pogłębianie
                                    wiedzy i prowadzenie badań na najwyższym
                                    poziomie. Jednak Italodisco University to
                                    nie tylko miejsce nauki. Uczelnia aktywnie
                                    promuje rozwój artystyczny swoich studentów.
                                    W ramach licznych klubów i organizacji
                                    studenckich, młodzi artyści mają możliwość
                                    wyrażania swojej twórczości i współpracy z
                                    innymi ambitnymi osobami. Dodatkowo,
                                    uczelnia organizuje liczne wydarzenia
                                    kulturalne, takie jak koncerty, wystawy i
                                    spektakle teatralne, które przyciągają
                                    zarówno studentów, jak i mieszkańców miasta.
                                    To doskonała okazja do wymiany doświadczeń i
                                    czerpania inspiracji z różnych dziedzin
                                    sztuki.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">How to recruitment</h4>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    Card subtitle
                                </h6>
                                <p class="card-text">
                                    Jeśli chcesz aplikować na naszej wspaniałej
                                    uczelni, pierwsze musisz założyć konto w
                                    zakładce "Register", a następnie się
                                    zalogować. Po zalogowaniu na stronie
                                    będziesz mógł przeglądać kierunki, a
                                    następnie wybrać ten który cię interesuje i
                                    aplikować właśnie na niego.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
}
