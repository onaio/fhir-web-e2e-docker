// config.js.tpl

window._env_ = {
  // keycloak
  REACT_APP_KEYCLOAK_API_BASE_URL: 'http://localhost:8080/auth/admin/realms/fhir',
  REACT_APP_KEYCLOAK_LOGOUT_URL:
    'http://localhost:8080/auth/realms/fhir/protocol/openid-connect/logout',
  REACT_APP_OPENSRP_ACCESS_TOKEN_URL:
    'http://localhost:8080/auth/realms/fhir/protocol/openid-connect/token',
  REACT_APP_OPENSRP_AUTHORIZATION_URL:
    'http://localhost:8080/auth/realms/fhir/protocol/openid-connect/auth',
  REACT_APP_OPENSRP_CLIENT_ID: 'fhir-web',
  REACT_APP_OPENSRP_USER_URL:
    'http://localhost:8080/auth/realms/fhir-app/protocol/openid-connect/userinfo',

  // fhir-web
  REACT_APP_WEBSITE_NAME: 'Fhir App',
  REACT_APP_OPENSRP_WEB_VERSION: 'fhir-web-release-tag',
  REACT_APP_DOMAIN_NAME: 'http://localhost:3000',
  REACT_APP_EXPRESS_OAUTH_GET_STATE_URL: 'http://localhost:3000/oauth/state',
  REACT_APP_EXPRESS_OAUTH_LOGOUT_URL: 'http://localhost:3000/logout',

  // fhir-server
  REACT_APP_FHIR_API_BASE_URL: 'http://localhost:8081/fhir',

  // UUID's
  REACT_APP_FHIR_ROOT_LOCATION_ID:'0ff54bb2-2059-434f-9f54-d940778b11fe',
  REACT_APP_COMMODITIES_LIST_RESOURCE_ID: 'fa305c39-4721-4099-b074-7285102f1c5b',
  // toggle fhir-web modules
  REACT_APP_ENABLE_FHIR_CARE_TEAM: 'true',
  REACT_APP_ENABLE_FHIR_GROUP: 'true',
  REACT_APP_ENABLE_FHIR_HEALTHCARE_SERVICES: 'true',
  REACT_APP_ENABLE_FHIR_LOCATIONS: 'true',
  REACT_APP_ENABLE_FHIR_PATIENTS: 'true',
  REACT_APP_ENABLE_FHIR_TEAMS: 'true',
  REACT_APP_ENABLE_FHIR_USER_MANAGEMENT: 'true',
  REACT_APP_ENABLE_FHIR_COMMODITY: 'true',
  REACT_APP_ENABLE_QUEST: 'true',
  REACT_APP_ENABLE_FHIR_TEAMS:'true',
  REACT_APP_ENABLE_TEAMS_ASSIGNMENT_MODULE:'true',
  REACT_APP_OPENSRP_OAUTH_SCOPES: 'profile,openid',
  REACT_APP_BACKEND_ACTIVE: 'true',
};