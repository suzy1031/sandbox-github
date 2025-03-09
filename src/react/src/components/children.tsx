export const BackgroundImage: React.FC = () => {
	return <div>background image</div>;
};

export const AuthMethodItem: React.FC = () => {
	return <div>auth method item</div>;
};

export const EmailSignup: React.FC = () => {
	return <div>email signup</div>;
};

type AuthMethodItemListProps = {
	list: {
		id: number;
	}[];
};

export const AuthMethodItemList: React.FC<AuthMethodItemListProps> = props => {
	return (
		<>
			{props.list.map(item => (
				<AuthMethodItem key={item.id} />
			))}
		</>
	);
};

export const FloatingBanner: React.FC = () => {
	return <div>floating banner</div>;
};
