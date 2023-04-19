import { Ability, AbilityBuilder } from "@casl/ability"
import store from "../store/index"

// Defines how to detect object's type
function subjectName(item) {
  if (!item || typeof item === "string") {
    return item
  }
  return item.__type
}

const ability = new Ability([], { subjectName })