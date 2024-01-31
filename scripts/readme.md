# Keycloak setup script

You can use this script to create, update resources on you keycloak instance as required by fhir-web.

## Setup

`yarn`

You can find a sample realm-import json file [here](./config/realm-import.json)

To create a completely new realm

`yarn create-realm`

To update an existing realm, note changes to existing resources will not apply.

`yarn update-realm`