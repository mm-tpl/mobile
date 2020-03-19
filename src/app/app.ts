import { app } from '@mmstudio/mobile';
import config from './config';
import s from './s';
import css from './styles';

/// MM IMPCOMPONENTS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
/// MM IMPCOMPONENTS END

/// MM IMPACTIONS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import a001 from './a001';
/// MM IMPACTIONS END

(() => {
	/// MM ACTIONS BEGIN
	/// 请不要修改下面的代码哟(๑•ω•๑)
	const actions = { a001 };
	/// MM ACTIONS END
	app('$no', actions, s, {
		/// MM COMPONENTS BEGIN
		/// 请不要修改下面的代码哟(๑•ω•๑)
		/// MM COMPONENTS END
	}, config, css);
})();
