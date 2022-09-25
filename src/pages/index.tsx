import { Container } from "components/Container";
import CTA from "components/CTA";
import withUserProvider from "contexts/withUserProvider";

const Index = () => (
  <Container height="90vh">
    <CTA />
  </Container>
);

export default withUserProvider(Index);
