import { Container } from "react-bootstrap"

import PizzaCard from "./PizzaCard";


function Menu() {
    return (
        <section id="menu" >
            <Container fluid>
                <div className="text-center">
                    <h3 id="logo" className="my-5 py-3">Treat yourself with our Everyday Menu <i class="bi bi-tiktok"></i> </h3>
                </div>
                <PizzaCard />
            </Container>
        </section>
    )
}

export default Menu