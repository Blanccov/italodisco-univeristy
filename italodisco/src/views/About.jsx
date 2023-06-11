import React, { useEffect } from "react";
import styles from "./About.module.scss";

export default function About() {
    const mobileScreen = 991;
    const screenWidth = window.innerWidth;

    return (
        <div className={styles["bg-image"]}>
            <div className="container">
                {!(screenWidth <= mobileScreen) && (
                    <div className="row row-cols-2 my-margin">
                        <div className="col"></div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        About univeristy
                                    </h4>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Card subtitle
                                    </h6>
                                    <p className="card-text">
                                        Italodisco University is one of the most
                                        renowned and innovative universities in
                                        the world. Named after the famous artist
                                        Taco Hemingway, this institution
                                        combines artistic heritage with academic
                                        excellence. Located in a picturesque
                                        setting on the edge of a beautiful park,
                                        the university offers its students not
                                        only excellent learning conditions but
                                        also an inspiring environment. The
                                        campus is designed to provide a harmony
                                        between modernity and nature, fostering
                                        creativity and innovation. Italodisco
                                        University is known for its diverse
                                        range of educational offerings,
                                        encompassing both humanities and natural
                                        sciences. The study programs are
                                        carefully developed and tailored to meet
                                        the demands of the job market, enabling
                                        students to develop in areas that
                                        interest them the most. The university
                                        provides not only highly qualified
                                        teaching staff but also well-equipped
                                        laboratories, libraries, and lecture
                                        halls. Students have access to the
                                        latest technologies and educational
                                        materials, allowing them to deepen their
                                        knowledge and conduct research at the
                                        highest level. However, Italodisco
                                        University is not just a place of
                                        learning. The university actively
                                        promotes the artistic development of its
                                        students. Through numerous clubs and
                                        student organizations, young artists
                                        have the opportunity to express their
                                        creativity and collaborate with other
                                        ambitious individuals. Additionally, the
                                        university organizes numerous cultural
                                        events such as concerts, exhibitions,
                                        and theater performances, which attract
                                        both students and city residents. This
                                        is an excellent opportunity for
                                        exchanging experiences and drawing
                                        inspiration from various art forms.
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
                                        If you want to apply to our fantastic
                                        university, you first need to create an
                                        account in the "Register" section and
                                        then log in. Once you're logged in,
                                        you'll be able to browse the study
                                        programs and select the one that
                                        interests you, and then apply
                                        specifically for that program.
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
                                        If you prefer to contact us by phone,
                                        please dial +XX XXX XXX XXX. Our
                                        recruitment team is available Monday
                                        through Friday from 9:00 AM to 5:00 PM
                                        and will be happy to provide you with
                                        any necessary information.
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Address:
                                    </h6>
                                    <p className="card-text">
                                        If you would like to visit us in person
                                        or send postal mail, here is our
                                        address: [University Address] [Postal
                                        Code, City] [Country]
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Email:
                                    </h6>
                                    <p className="card-text">
                                        Email: Alternatively, you can reach us
                                        via email. Simply send your message to
                                        [email address], and our recruitment
                                        team will strive to respond as quickly
                                        as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {screenWidth <= mobileScreen && (
                    <div>
                        <div className="col"></div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        About univeristy
                                    </h4>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Card subtitle
                                    </h6>
                                    <p className="card-text">
                                        Italodisco University is one of the most
                                        renowned and innovative universities in
                                        the world. Named after the famous artist
                                        Taco Hemingway, this institution
                                        combines artistic heritage with academic
                                        excellence. Located in a picturesque
                                        setting on the edge of a beautiful park,
                                        the university offers its students not
                                        only excellent learning conditions but
                                        also an inspiring environment. The
                                        campus is designed to provide a harmony
                                        between modernity and nature, fostering
                                        creativity and innovation. Italodisco
                                        University is known for its diverse
                                        range of educational offerings,
                                        encompassing both humanities and natural
                                        sciences. The study programs are
                                        carefully developed and tailored to meet
                                        the demands of the job market, enabling
                                        students to develop in areas that
                                        interest them the most. The university
                                        provides not only highly qualified
                                        teaching staff but also well-equipped
                                        laboratories, libraries, and lecture
                                        halls. Students have access to the
                                        latest technologies and educational
                                        materials, allowing them to deepen their
                                        knowledge and conduct research at the
                                        highest level. However, Italodisco
                                        University is not just a place of
                                        learning. The university actively
                                        promotes the artistic development of its
                                        students. Through numerous clubs and
                                        student organizations, young artists
                                        have the opportunity to express their
                                        creativity and collaborate with other
                                        ambitious individuals. Additionally, the
                                        university organizes numerous cultural
                                        events such as concerts, exhibitions,
                                        and theater performances, which attract
                                        both students and city residents. This
                                        is an excellent opportunity for
                                        exchanging experiences and drawing
                                        inspiration from various art forms.F
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
                                        If you want to apply to our fantastic
                                        university, you first need to create an
                                        account in the "Register" section and
                                        then log in. Once you're logged in,
                                        you'll be able to browse the study
                                        programs and select the one that
                                        interests you, and then apply
                                        specifically for that program.
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
                                        If you prefer to contact us by phone,
                                        please dial +XX XXX XXX XXX. Our
                                        recruitment team is available Monday
                                        through Friday from 9:00 AM to 5:00 PM
                                        and will be happy to provide you with
                                        any necessary information.
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Address:
                                    </h6>
                                    <p className="card-text">
                                        If you would like to visit us in person
                                        or send postal mail, here is our
                                        address: [University Address] [Postal
                                        Code, City] [Country]
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Email:
                                    </h6>
                                    <p className="card-text">
                                        Email: Alternatively, you can reach us
                                        via email. Simply send your message to
                                        [email address], and our recruitment
                                        team will strive to respond as quickly
                                        as possible.
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
