import { useState } from "react";
import { DynamicsWebApi } from 'dynamics-web-api';
import { useMsal } from "@azure/msal-react";

export const useDynamicsContacts = () => {
    const { instance, accounts } = useMsal();
    const [contacts, setContacts] = useState<string>('');
    const serverUrl = import.meta.env.VITE_DYNAMICS_CRM_URL;

    const loadContacts = async () => {
        const dynamicsWebApi = new DynamicsWebApi({
            serverUrl: serverUrl,
            onTokenRefresh: async () => {
                const tokenContainer = await instance.acquireTokenSilent({
                    scopes: [],
                    account: accounts[0],
                });
                return tokenContainer.accessToken;
            }
        });

        // Retrieve contacts using retrieveMultiple method
        const response = await dynamicsWebApi.retrieveMultiple({
            collection: "contacts",
            select: ["fullname", "emailaddress1"],
        });

        // const response = await dynamicsWebApi.callFunction("WhoAmI");

        // const contact = {
        //     firstname: "John",
        //     lastname: "Doe"
        // };
        // const order = {
        //     name: "1 year membership",
        //     //reference a request in a navigation property
        //     "customerid_contact@odata.bind": "$1"
        // };
        // dynamicsWebApi.startBatch();
        // dynamicsWebApi.create({ data: contact, collection: "contacts", contentId: "1" });
        // dynamicsWebApi.create({ data: order, collection: "salesorders" });
        // const response = await dynamicsWebApi.executeBatch();

        console.log(response);
        setContacts(JSON.stringify(response, null, 2));
    };

    return [contacts, loadContacts] as const;
}