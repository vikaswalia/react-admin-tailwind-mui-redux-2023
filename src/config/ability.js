// import { Ability, AbilityBuilder } from "@casl/ability"
// import store from "../store/index"

// // Defines how to detect object's type
// function subjectName(item) {
//   if (!item || typeof item === "string") {
//     return item
//   }
//   return item.__type
// }

// const ability = new Ability([], { subjectName })

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