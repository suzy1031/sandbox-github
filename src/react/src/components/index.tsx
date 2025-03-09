import type { ViewPattern, List } from '../props';
import { viewController } from './presenter';

type Props = {
	pattern: ViewPattern;
	list: List[];
};

export const Index: React.FC<Props> = props => {
	/**
	 * viewController
	 * viewModelで返却されたパターンに応じて、表示するView (jsx) を制御する
	 * VanillaJSを使いplan objectで定義することで移行性が高くできる
	 * jsx部分はReactに依存するが、そこだけ別フレームワークのテンプレートエンジンに置き換えればよい
	 */
	const view = viewController[props.pattern];
	return (
		<>
			{view.backgroundImage}
			<header>this is header</header>
			<body>
				{view.latestLoginSection}
				{view.loginChoiceSection(props.list)}
				{view.emailLoginSection}
			</body>
			{view.banner}
			<footer>this is footer</footer>
		</>
	);
};
