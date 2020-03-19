const gulp = require('gulp');
const colors = require('colors');

gulp.task('test', async () => {
	const fs = require('fs');
	const config = require('./mm.json');
	const internalIp = require('internal-ip');
	const ip = await internalIp.v4();
	const port = config.port;
	const server = `http://${ip}:${port}`;
	return gulp.watch('dist/app/a001.js', { delay: 5000 })
		.on('change', (path) => {
			setTimeout(() => {
				fs.readFile(path, async (_err, data) => {
					const o = data.toString();
					if (o.length === 0) {
						console.error(colors.red('Could not get file content: dist/app/a001.js'));
					} else {
						const n = o.replace(/am000002_1\.default\(mm, .*\);/, `am000002_1.default(fd, '${server}');`);
						if (n !== o) {
							fs.writeFileSync(path, n);
						}
					}
				});
			}, 100);
		});
});

gulp.task('default', () => {
	const uglify = require('gulp-uglify-es').default;

	return gulp.src('dist/**/*.js')
		.pipe(uglify({
			compress: {
				drop_console: true
			}
		}))
		.pipe(gulp.dest(`dist/`));
});
