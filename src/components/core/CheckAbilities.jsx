import React, { useContext } from 'react';
import { Can, AbilityContext } from '@config/Can';

const CheckAbilities = () => {
	const ability = useContext(AbilityContext);
	return (
		<div className='mt-2'>
			<h1 className='text-red-500 text-2xl'>Abilities Check</h1>
			<Can I='all-access'>
				<p>You have ALL ACCESS</p>
			</Can>
			<Can I='teachers-access'>
				<p>You have access to Teachers</p>
			</Can>

			{!ability.can('teachers-access') && <p>You cannot access teacher</p>}
			{ability.can('teachers-create') && <p>Can create teacher</p>}
			{!ability.can('teachers-create') && <p>You cannot create teacher</p>}
		</div>
	);
};

export default CheckAbilities;
