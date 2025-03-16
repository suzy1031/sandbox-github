import { useState } from 'react';

export const Button = ({ primary = true }) => {
	const [isToggleOn, setIsToggleOn] = useState(true);

	const className = primary ? 'primary' : 'secondary';

	return (
		<button
			className={className}
			type='button'
			onClick={() => setIsToggleOn(!isToggleOn)}
		>
			{isToggleOn ? 'ON' : 'OFF'}
		</button>
	);
};
