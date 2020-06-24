import React from 'react';
// import HeaderTitle from '../../components/Title/Title';

import QrReader from '../../components/QRReaderComponent/QRReaderComponent';
// import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Footer from '../../components/FooterComponent/FooterComponent';
import Header from '../../components/Title/Title';
import SubmitForm from '../../components/SingleInputFormComponent/SingleInputFormComponent';

export const JoinGamePage = () => (
  // <HeaderTitle title="This is the Join Game Page" />
  <section className="home bodycontainer">
    <Header title="Scan QR-Code" />
    <div className="bodywrapper">
      <p className="smallwhitedetail">
        Scan the QR-code or enter the game code , that your leader gave you.
      </p>
      <QrReader />
      <SubmitForm
        inputLabel="Game code"
        value="Enter code"
        ButtonTitle="Join Game"
      />
    </div>
    <Footer />
  </section>
);
