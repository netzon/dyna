import "./App.css";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { ProfileContent } from "./components/ProfileContent";
import { PageLayout } from "./components/PageLayout";
import { DynamicsTest } from "./components/DynamicsTest";

export const App: React.FC = () => {
  const MainContent = () => {
    return (
      <div className="App">
        <AuthenticatedTemplate>
          <ProfileContent />
          <DynamicsTest />
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <h5>
            <center>Please sign-in to see your profile information.</center>
          </h5>
        </UnauthenticatedTemplate>
      </div>
    );
  };

  return (
    <>
      <PageLayout>
        <center>
          <MainContent />
        </center>
      </PageLayout>
    </>
  );
};
