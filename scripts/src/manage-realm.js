import { readFileSync } from 'node:fs';
import adminClient from './keycloak-admin-client.js';

if (process.env.UPDATE_REALM == 'true') {
  // for fluff's sake.
  await adminClient.realms.update(
    JSON.parse(readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8'))
  );
} else {
  await adminClient.realms.create(
    JSON.parse(readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8'))
  );
}
