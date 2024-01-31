import KcAdminClient from '@keycloak/keycloak-admin-client';
import { adminClientConfig, realmOfInterest } from '../config/local.js';

const adminClient = new KcAdminClient(adminClientConfig)
await adminClient.auth(adminClientConfig);

if (realmOfInterest) {
  adminClient.setConfig({
    realmName: realmOfInterest
  })
}

export default adminClient;
