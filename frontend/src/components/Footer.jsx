import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p> CopyRight &copy; Platinum Shop {year} </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer