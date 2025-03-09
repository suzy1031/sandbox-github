/**
 * pattern
 * web
 * 1. isAdult: false, isApp: false, snsLogin: false, latestLogin: 'email'
 * 2. isAdult: false, isApp: false, snsLogin: false, latestLogin: 'sns'
 * 3. isAdult: true, isApp: false, snsLogin: false, latestLogin: 'email'
 * 4. isAdult: true, isApp: false, snsLogin: false, latestLogin: 'sns'
 * app
 * 5. isAdult: false, isApp: true, snsLogin: false, latestLogin: 'email'
 * 6. isAdult: false, isApp: true, snsLogin: true, latestLogin: 'sns'
 * 7. isAdult: true, isApp: true, snsLogin: false, latestLogin: 'email'
 * 8. isAdult: true, isApp: true, snsLogin: true, latestLogin: 'sns'
 */

export type ViewPattern =
	| 'webGeneralEmail'
	| 'webGeneralSns'
	| 'webAdultEmail'
	| 'webAdultSns'
	| 'appGeneralEmail'
	| 'appGeneralSns'
	| 'appAdultEmail'
	| 'appAdultSns';

export type List = {
	id: number;
};
