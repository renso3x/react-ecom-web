import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './layout.module.css';

export interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Container fluid  className={styles.layout}>
        <Row>
          <Sidebar />
          <div id="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;