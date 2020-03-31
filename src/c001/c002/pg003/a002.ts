import am1 from '@mmstudio/am000001';
import am12 from '@mmstudio/am000012';

export default function a002(mm: am1) {
	// 页面跳转(默认特效)
	(() => {
		const p1 = 'pg005';	// 页面名
		const p2 = {};	// 跳转参数
		return am12(mm, p1, p2);
	})();
}
