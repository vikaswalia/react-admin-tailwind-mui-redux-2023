import { useContext } from 'react';
import { AbilityBuilder, Ability } from '@casl/ability';
import { AbilityContext } from '@config/Can';



const useUpdateAbility = () =>{
  const ability = useContext(AbilityContext);
	const { can, rules } = new AbilityBuilder(Ability);

  const updateAbility = (user)=>{
    if (user.permissions.length>0) {
      user.permissions.forEach((permission) => {
        can(permission);
      });
    } else if(user.roles.includes("super-admin")){
        can('manage', 'all')
    }
  
    ability.update(rules);
  }
	return [updateAbility];
}

export default useUpdateAbility;