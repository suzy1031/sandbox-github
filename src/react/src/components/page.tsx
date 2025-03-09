import type { List } from '../props';
import { viewModel } from './presenter';
import { Index } from './index';

type Props = {
	list: List[];
	isAdult: boolean;
	isApp: boolean;
	snsLogin: boolean;
	latestLogin: 'email' | 'sns';
};

export const Page: React.FC<Props> = props => {
	/**
	 * viewModel
	 * propsの値を結合した結果に応じてrenderするReactElementを制御する
	 * 元々は、./index.tsxのjsx内に &&演算子 や 三項演算子を用いて、出しわけを書いていた
	 * jsx内にロジックが入り込んでしまい、Reactに依存したロジックになってしまう課題
	 * ロジック部分はVanillaJSで書くと、React以外のフレームワークに移行しやすい
	 */
	const pattern = viewModel(props.isApp, props.isAdult, props.snsLogin);
	return <Index pattern={pattern} list={props.list} />;
};
