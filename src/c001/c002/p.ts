import { container } from '@mmstudio/mobile';
import config from './config';
import s from './s';

/// MM IMPCOMPONENTS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import pg003 from './pg003/p';
import pg004 from './pg004/p';
/// MM IMPCOMPONENTS END

/// MM IMPACTIONS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import a001 from './a001';
/// MM IMPACTIONS END

export default function Container() {
	/// MM ACTIONS BEGIN
	/// 请不要修改下面的代码哟(๑•ω•๑)
	const actions = { a001 };
	/// MM ACTIONS END
	return container('material-top-tab', 'c002', actions, s, config,
		/// MM COMPONENTS BEGIN
		/// 请不要修改下面的代码哟(๑•ω•๑)
		pg003(), pg004()
		/// MM COMPONENTS END
	);
}
