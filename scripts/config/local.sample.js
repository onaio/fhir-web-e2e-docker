// cp this file to local.json and change values below.

export const adminClientConfig = {
    baseUrl: 'http://127.0.0.1:8080/auth',
    realmName: 'master',
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli'
};

// Realm which you would like fine-grained operations to be done on,
// this should be a realm that the credentials in the adminClientConfig can access.
// If you are editing resources in the adminClientConfig.realm, then this is not necessary
export const realmOfInterest = ""