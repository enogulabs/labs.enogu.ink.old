import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Reset } from 'styled-reset';
import { Footer } from './Footer';
import { Header } from './Header';

const Divider = styled.hr`
  border: 0.5px solid #EBEBEB;
  margin: 0;
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "enoguLabs",
}) => (
  <div>
    <Reset />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet" />
    </Head>
    <Header />
    {children}
    <Divider />
    <Footer />
  </div>
);

export default Layout;
