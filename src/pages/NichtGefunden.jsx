import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Block from "../ui/Block";
import StyledPageNotFound from "../ui/PageNotFoundStyle";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <StyledPageNotFound>
      <Block>
        <Heading as="h1" showCloseButton={false}>
          Die Seite nach der Du suchst, wurde leider nicht gefunden.😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Hier geht es zurück.
        </button>
      </Block>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
