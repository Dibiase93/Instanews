const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const browserSync = require("browser-sync");
const eslint = require("gulp-eslint");
const prettyError = require("gulp-prettyerror");
// add just these 3 lines below
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");

// add a new task from the slides, gulp sass
gulp.task("sass", function() {
  return gulp
    .src("./sass/style.scss")
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task("lint", function() {
  return gulp
    .src(["./js/*.js"])
    .pipe(prettyError())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task(
  "scripts",
  gulp.series("lint", function() {
    return gulp
      .src("./js/*.js")
      .pipe(terser())
      .pipe(rename({ extname: ".min.js" }))
      .pipe(gulp.dest("./build/js"));
  })
);

gulp.task("browser-sync", function(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  }); // end of browserSync.init

  gulp
    .watch(["index.html", "build/css/*.css", "build/js/*.js"])
    .on("change", browserSync.reload);
}); // browser-sync

gulp.task("watch", function() {
  gulp.watch("js/*.js", gulp.series("scripts"));
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
});

// default gulp runs everything at once in this case
gulp.task("default", gulp.parallel("browser-sync", "watch"));
