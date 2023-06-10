import React, {useEffect} from "react";
import styles from "./About.module.scss";

export default function About() {
    const mobileScreen = 991;
    const screenWidth = window.innerWidth;

    return (
        <div className={styles["bg-image"]}>
            <div className="container">
               {!(screenWidth <= mobileScreen) &&(
                <div className="row row-cols-2 my-margin">
                <div className="col"></div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">About univeristy</h4>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p className="card-text">
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
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                How to recruitment
                            </h4>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p className="card-text">
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
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Check recruitments!
                            </h4>
                            <h5 className="card-subtitle mb-2 text-muted">
                                Contact us!
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Phone:
                            </h6>
                            <p className="card-text">
                                If you prefer to contact us by phone, please
                                dial +XX XXX XXX XXX. Our recruitment team
                                is available Monday through Friday from 9:00
                                AM to 5:00 PM and will be happy to provide
                                you with any necessary information.
                            </p>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Address:
                            </h6>
                            <p className="card-text">
                                If you would like to visit us in person or
                                send postal mail, here is our address:
                                [University Address] [Postal Code, City]
                                [Country]
                            </p>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Email:
                            </h6>
                            <p className="card-text">
                                Email: Alternatively, you can reach us via
                                email. Simply send your message to [email
                                address], and our recruitment team will
                                strive to respond as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
               )}
               {(screenWidth <= mobileScreen) &&(
                <div>
                <div className="col"></div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">About univeristy</h4>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p className="card-text">
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
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                How to recruitment
                            </h4>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p className="card-text">
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
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Check recruitments!
                            </h4>
                            <h5 className="card-subtitle mb-2 text-muted">
                                Contact us!
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Phone:
                            </h6>
                            <p className="card-text">
                                If you prefer to contact us by phone, please
                                dial +XX XXX XXX XXX. Our recruitment team
                                is available Monday through Friday from 9:00
                                AM to 5:00 PM and will be happy to provide
                                you with any necessary information.
                            </p>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Address:
                            </h6>
                            <p className="card-text">
                                If you would like to visit us in person or
                                send postal mail, here is our address:
                                [University Address] [Postal Code, City]
                                [Country]
                            </p>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Email:
                            </h6>
                            <p className="card-text">
                                Email: Alternatively, you can reach us via
                                email. Simply send your message to [email
                                address], and our recruitment team will
                                strive to respond as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
               )}

            </div>
        </div>
    );
}
