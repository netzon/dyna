import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { loginRequest } from "../authConfig";

export const useMsalAccessToken = () => {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const loadAccessToken = async (): Promise<string> => {
        const tokenContainer = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        });
        setAccessToken(tokenContainer.accessToken);
        return tokenContainer.accessToken;
    };
    return [accessToken, loadAccessToken] as const;
}