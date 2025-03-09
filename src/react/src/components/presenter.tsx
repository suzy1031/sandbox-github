/**
 * 腐敗防止層
 * BFF (express / gSSP) から受け取る抽象的なdataを具体的な表示用dataに変換する層
 * 抽象 → 具体への変換をこの層で行うことで、BFF と FE の汚染を防ぐグルーコードとして機能する
 * また、VanillaJSで書くことで、フレームワークに依存させないようにする
 */

import type { ViewPattern, List } from '../props';
import {
	BackgroundImage,
	AuthMethodItem,
	EmailSignup,
	AuthMethodItemList,
	FloatingBanner,
} from './children';

export const viewModel = (
	isApp: boolean,
	isAdult: boolean,
	snsLogin: boolean,
) => {
	const app = (): ViewPattern => {
		if (!isAdult && snsLogin) return 'appGeneralSns';
		if (isAdult && !snsLogin) return 'appAdultEmail';
		if (isAdult && snsLogin) return 'appAdultSns';
		return 'appGeneralEmail';
	};

	const web = (): ViewPattern => {
		if (!isAdult && snsLogin) return 'webGeneralSns';
		if (isAdult && !snsLogin) return 'webAdultEmail';
		if (isAdult && snsLogin) return 'webAdultSns';
		return 'webGeneralEmail';
	};

	if (isApp) {
		return app();
	}
	return web();
};

export const viewController = {
	webGeneralEmail: {
		backgroundImage: <BackgroundImage />,
		latestLoginSection: <EmailSignup />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: null,
		banner: <FloatingBanner />,
	},
	webGeneralSns: {
		backgroundImage: <BackgroundImage />,
		latestLoginSection: <AuthMethodItem />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: <EmailSignup />,
		banner: <FloatingBanner />,
	},
	webAdultEmail: {
		backgroundImage: null,
		latestLoginSection: <EmailSignup />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: null,
		banner: <FloatingBanner />,
	},
	webAdultSns: {
		backgroundImage: null,
		latestLoginSection: <AuthMethodItem />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: <EmailSignup />,
		banner: <FloatingBanner />,
	},
	appGeneralEmail: {
		backgroundImage: <BackgroundImage />,
		latestLoginSection: <EmailSignup />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: null,
		banner: <FloatingBanner />,
	},
	appGeneralSns: {
		backgroundImage: <BackgroundImage />,
		latestLoginSection: <AuthMethodItem />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: <EmailSignup />,
		banner: <FloatingBanner />,
	},
	appAdultEmail: {
		backgroundImage: null,
		latestLoginSection: <EmailSignup />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: null,
		banner: null,
	},
	appAdultSns: {
		backgroundImage: null,
		latestLoginSection: <AuthMethodItem />,
		loginChoiceSection: (list: List[]) => {
			return <AuthMethodItemList list={list} />;
		},
		emailLoginSection: <EmailSignup />,
		banner: null,
	},
};
