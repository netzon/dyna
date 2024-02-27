import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { loginRequest } from "../authConfig";
import { callMsGraph } from "../lib/graph";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./ProfileData";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
export const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      <br />
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="secondary" onClick={RequestProfileData}>
          Request Profile Information
        </Button>
      )}
    </>
  );
};
