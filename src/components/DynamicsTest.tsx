import Button from "react-bootstrap/Button";
import { useDynamicsContacts } from "../hooks/use-dynamics-contacts";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
export const DynamicsTest = () => {
  const [response, load] = useDynamicsContacts();

  return (
    <>
      <h5 className="card-title">Dynamics Test</h5>
      <br />
      <Button
        variant="secondary"
        onClick={async () => {
          await load();
        }}
      >
        Request Dynamics Information
      </Button>
      <pre>{response}</pre>
    </>
  );
};
