import { container } from '@mmstudio/mobile';
import config from './config';
import s from './s';

/// MM IMPCOMPONENTS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import c002 from './c002/p';
import pg002 from './pg002/p';
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
	return container('bottom-tab', 'c001', actions, s, config,
		/// MM COMPONENTS BEGIN
		/// 请不要修改下面的代码哟(๑•ω•๑)
		c002(), pg002()
		/// MM COMPONENTS END
	);
}
