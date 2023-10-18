import KcAdminClient from '@keycloak/keycloak-admin-client';

const baseUrl = 'http://127.0.0.1:8080/auth';

const adminClientConfig =  {
  baseUrl: baseUrl,
  token: {
    username: 'admin',
    password: 'admin',
    grant_type: 'password',
    client_id: 'fhir-client',
    realmName: 'fhir'
  },
  adminClient: {
    baseUrl: baseUrl,
    realmName: 'master',
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli'
  }
};

const adminClient = new KcAdminClient(adminClientConfig.adminClient)

await adminClient.auth(adminClientConfig.adminClient);

export default adminClient;