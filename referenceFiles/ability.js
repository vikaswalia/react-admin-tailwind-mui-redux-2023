import { Ability } from '@casl/ability'
import Cookies from 'js-cookie';
import { defineAbility } from '@casl/ability'



export function createAbility() {
  const ability = new Ability();

  return ability;
}

export default defineAbility((can, cannot) => {

  can([]);
 
});

