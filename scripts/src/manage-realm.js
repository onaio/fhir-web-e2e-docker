import adminClient from './keycloak-admin-client.js';
import { realmImportConfig } from './realm-import-config.js'

// if (process.env.UPDATE_REALM == 'true') {
//   // for fluff's sake.
//   await adminClient.realms.update(
//     JSON.parse(readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8'))
//   );
// } else {
//   await adminClient.realms.create(
//     JSON.parse(readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8'))
//   );
// }


// create groups, roles, users independently of the realm, or client.

async function createRoles(realmConfig) {
  const { roles: rawRoles } = realmConfig
  const { realm: roles } = rawRoles
  const [rolePromiseFactories, compositePromiseFactories] = [[], []]
  const createPromiseFactory = (role) => () => adminClient.roles.create(role)
  for (const role of roles) {
    if (role.composite) {
      compositePromiseFactories.push(createPromiseFactory(role))
    } else {
      rolePromiseFactories.push(createPromiseFactory(role))
    }
  }
  // first resolve rolePromises and only then compositePromises
  await Promise.allSettled(rolePromiseFactories.map(x => x()))
  await Promise.allSettled(compositePromiseFactories.map(x => x()))
  console.log("This runs")
}

async function createGroup(group){
  const createdGroup = await adminClient.groups.create(group)
  let finalCreatedGroup
  const realmRoles = []
  if (group.realmRoles && group.realmRoles.length) {
    for (const role of (group.realmRoles)) {
      const roleRep = await adminClient.roles.findOneByName({name: role})
      console.error({roleRep, role})
      realmRoles.push(roleRep);
    }
    console.log({realmRoles, sample: realmRoles[0]})
    finalCreatedGroup =  await adminClient.groups.addRealmRoleMappings({
      id: createdGroup.id,
      roles: realmRoles.map(role => ({id: role.id, name: role.name}))
    })
  }
  // TODO - Handle client roles.
  // TODO - caveat we are only going one level deep for now.
  // if(group.subGroups){
  //   for(const subGroup in group.subGroups){
  //     await adminClient.groups.createChildGroup({
  //       id: createGroup.id
  //     }, subGroup)
  //   }
  // }
}

async function createUsers(realmConfig){
  const {users} = realmConfig
  const firstUser = users[0]
  await adminClient.users.create(firstUser)
}

async function createGroups(realmConfig) {
  const { groups } = realmConfig;
  for (const group of groups) {
    await createGroup(group)
  }
}

async function main() {
  // await createRoles(realmImportConfig)
  // await createGroups(realmImportConfig)
  await createUsers(realmImportConfig)
}

main()