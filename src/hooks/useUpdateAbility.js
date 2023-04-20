import { useContext } from 'react';
import { AbilityBuilder, Ability } from '@casl/ability';
import { AbilityContext } from '@config/Can';



const useUpdateAbility = () =>{
  const ability = useContext(AbilityContext);
	const { can, rules } = new AbilityBuilder(Ability);

  const updateAbility = (permissions)=>{
    if (permissions) {
      permissions.forEach((permission) => {
        can(permission);
      });
    }
  
    ability.update(rules);
  }
	return [updateAbility];
}

export default useUpdateAbility;