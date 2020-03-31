import { app } from '@mmstudio/mobile';
import config from './config';
import s from './s';
import css from './css';

/// MM IMPCOMPONENTS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import c001 from '../c001/p';
import pg001 from '../pg001/p';
import pg005 from '../pg005/p';
import pg006 from '../pg006/p';
/// MM IMPCOMPONENTS END

/// MM IMPACTIONS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
import a001 from './a001';
/// MM IMPACTIONS END

export default function App() {
	/// MM ACTIONS BEGIN
	/// 请不要修改下面的代码哟(๑•ω•๑)
	const actions = { a001 };
	/// MM ACTIONS END
	return app('stack', actions, s, config, css,
		/// MM COMPONENTS BEGIN
/// 请不要修改下面的代码哟(๑•ω•๑)
c001(), pg001(), pg005(), pg006()
		/// MM COMPONENTS END
	);
}
