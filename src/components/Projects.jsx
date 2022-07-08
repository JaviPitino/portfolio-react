import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Projects() {
  return (
    <section id="projects">
        <div className="container-projects">
        <div className="line-about"></div>
        <h3>Proyectos</h3>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./imgs/road-to-hell.png" />
            <Card.Body>
                <Card.Title>Road To Hell</Card.Title>
                <Card.Text>
                Un pequeño juego de colisiones con estético ochentera realizado con javascript. Dosis de rock, cerveza, un poquito de irreverencia y mucho humor
                </Card.Text>
                <Button variant="primary">Go Hell!</Button>
            </Card.Body>
            </Card>
        </div>
    </section>
  )
}

export default Projects