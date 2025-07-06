import { Container } from "inversify";
import { container as rootContainer } from "../../containers/container.js";
const container: Container = new Container({parent: rootContainer});


export default container;