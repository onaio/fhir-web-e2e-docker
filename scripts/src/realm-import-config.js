import {readFileSync} from 'fs';

export const realmImportConfig = JSON.parse(readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8'))
