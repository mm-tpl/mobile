import { page } from '@mmstudio/mobile';
import config from './config';
import s from './s';
import css from './css';
import tpl from './tpl';

/// MM IMPACTIONS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import a001 from './a001';
import a002 from './a002';
/// MM IMPACTIONS END

export default function Page() {
	/// MM ACTIONS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
	const actions = { a001, a002 };
	/// MM ACTIONS END
	return page('pg005', actions, s, tpl, config, css);
}
