import { bigtestGlobals } from '@bigtest/globals';
import '@interactors/with-cypress';

import './stripes';

import './api';

import './login';
import './checkin';
import './checkout';
import './eholdings';
import './inventory';
import './users';

bigtestGlobals.defaultInteractorTimeout = 10000;
